// collects users info
import React, { useState } from 'react';
import { CreditCard, MapPin, User, Mail, Phone, Smartphone } from 'lucide-react';

const CheckoutForm = ({ onSubmit, cartTotal = 0, isLoading = false }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: 'Kenya',
    
    // Billing Address
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: 'Kenya',
    sameAsShipping: true,
    
    // Payment Information
    paymentMethod: 'card', // 'card' or 'mpesa'
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    mpesaNumber: '',
    
    // Additional Options
    deliveryInstructions: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Personal Information Validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';

    // Shipping Address Validation
    if (!formData.shippingAddress.trim()) newErrors.shippingAddress = 'Shipping address is required';
    if (!formData.shippingCity.trim()) newErrors.shippingCity = 'City is required';
    if (!formData.shippingState.trim()) newErrors.shippingState = 'State/County is required';
    if (!formData.shippingZip.trim()) newErrors.shippingZip = 'Postal code is required';

    // Billing Address Validation (if different from shipping)
    if (!formData.sameAsShipping) {
      if (!formData.billingAddress.trim()) newErrors.billingAddress = 'Billing address is required';
      if (!formData.billingCity.trim()) newErrors.billingCity = 'City is required';
      if (!formData.billingState.trim()) newErrors.billingState = 'State/County is required';
      if (!formData.billingZip.trim()) newErrors.billingZip = 'Postal code is required';
    }

    // Payment Information Validation
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Please enter a valid 16-digit card number';
      }
      
      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = 'Expiry date is required';
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = 'Please enter date in MM/YY format';
      }
      
      if (!formData.cvv.trim()) {
        newErrors.cvv = 'CVV is required';
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = 'Please enter a valid CVV';
      }
      
      if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    } else if (formData.paymentMethod === 'mpesa') {
      if (!formData.mpesaNumber.trim()) {
        newErrors.mpesaNumber = 'M-Pesa number is required';
      } else if (!/^(\+254|254|0)?[17]\d{8}$/.test(formData.mpesaNumber.replace(/\s/g, ''))) {
        newErrors.mpesaNumber = 'Please enter a valid M-Pesa number (e.g., 0712345678)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // If billing same as shipping, copy shipping details
      const finalFormData = {
        ...formData,
        billingAddress: formData.sameAsShipping ? formData.shippingAddress : formData.billingAddress,
        billingCity: formData.sameAsShipping ? formData.shippingCity : formData.billingCity,
        billingState: formData.sameAsShipping ? formData.shippingState : formData.billingState,
        billingZip: formData.sameAsShipping ? formData.shippingZip : formData.billingZip,
        billingCountry: formData.sameAsShipping ? formData.shippingCountry : formData.billingCountry,
      };
      onSubmit(finalFormData);
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0,2) + '/' + v.substring(2,4);
    }
    return v;
  };

  const formatMpesaNumber = (value) => {
    // Remove all non-digits
    let cleaned = value.replace(/\D/g, '');
    
    // Handle different formats
    if (cleaned.startsWith('254')) {
      cleaned = '0' + cleaned.substring(3);
    } else if (cleaned.startsWith('+254')) {
      cleaned = '0' + cleaned.substring(4);
    }
    
    // Format as 0XXX XXX XXX
    if (cleaned.length > 4) {
      cleaned = cleaned.substring(0, 4) + ' ' + cleaned.substring(4, 7) + ' ' + cleaned.substring(7, 10);
    }
    
    return cleaned;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+254 700 000 000"
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900">Shipping Address</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Street Address *
            </label>
            <input
              type="text"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.shippingAddress ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="123 Main Street, Apartment/Suite #"
            />
            {errors.shippingAddress && <p className="mt-1 text-sm text-red-600">{errors.shippingAddress}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                name="shippingCity"
                value={formData.shippingCity}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.shippingCity ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Nairobi"
              />
              {errors.shippingCity && <p className="mt-1 text-sm text-red-600">{errors.shippingCity}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                County *
              </label>
              <input
                type="text"
                name="shippingState"
                value={formData.shippingState}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.shippingState ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Nairobi County"
              />
              {errors.shippingState && <p className="mt-1 text-sm text-red-600">{errors.shippingState}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Postal Code *
              </label>
              <input
                type="text"
                name="shippingZip"
                value={formData.shippingZip}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.shippingZip ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="00100"
              />
              {errors.shippingZip && <p className="mt-1 text-sm text-red-600">{errors.shippingZip}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Billing Address</h2>
        </div>
        
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="sameAsShipping"
              checked={formData.sameAsShipping}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Same as shipping address</span>
          </label>
        </div>
        
        {!formData.sameAsShipping && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address *
              </label>
              <input
                type="text"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.billingAddress ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="123 Main Street, Apartment/Suite #"
              />
              {errors.billingAddress && <p className="mt-1 text-sm text-red-600">{errors.billingAddress}</p>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="billingCity"
                  value={formData.billingCity}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.billingCity ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nairobi"
                />
                {errors.billingCity && <p className="mt-1 text-sm text-red-600">{errors.billingCity}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  County *
                </label>
                <input
                  type="text"
                  name="billingState"
                  value={formData.billingState}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.billingState ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nairobi County"
                />
                {errors.billingState && <p className="mt-1 text-sm text-red-600">{errors.billingState}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code *
                </label>
                <input
                  type="text"
                  name="billingZip"
                  value={formData.billingZip}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.billingZip ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="00100"
                />
                {errors.billingZip && <p className="mt-1 text-sm text-red-600">{errors.billingZip}</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
        </div>
        
        {/* Payment Method Selection */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
              formData.paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className="flex items-center">
                <CreditCard className="w-6 h-6 text-gray-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Credit/Debit Card</div>
                  <div className="text-sm text-gray-500">Visa, Mastercard, etc.</div>
                </div>
              </div>
              {formData.paymentMethod === 'card' && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </label>
            
            <label className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
              formData.paymentMethod === 'mpesa' ? 'border-green-500 bg-green-50' : 'border-gray-200'
            }`}>
              <input
                type="radio"
                name="paymentMethod"
                value="mpesa"
                checked={formData.paymentMethod === 'mpesa'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className="flex items-center">
                <Smartphone className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">M-Pesa</div>
                  <div className="text-sm text-gray-500">Mobile money payment</div>
                </div>
              </div>
              {formData.paymentMethod === 'mpesa' && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </label>
          </div>
        </div>
        
        {/* Card Payment Fields */}
        {formData.paymentMethod === 'card' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number *
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={(e) => {
                  const formatted = formatCardNumber(e.target.value);
                  setFormData(prev => ({ ...prev, cardNumber: formatted }));
                }}
                maxLength="19"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="1234 5678 9012 3456"
              />
              {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={(e) => {
                    const formatted = formatExpiryDate(e.target.value);
                    setFormData(prev => ({ ...prev, expiryDate: formatted }));
                  }}
                  maxLength="5"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="MM/YY"
                />
                {errors.expiryDate && <p className="mt-1 text-sm text-red-600">{errors.expiryDate}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV *
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  maxLength="4"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.cvv ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="123"
                />
                {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name *
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.cardName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Name on card"
                />
                {errors.cardName && <p className="mt-1 text-sm text-red-600">{errors.cardName}</p>}
              </div>
            </div>
          </div>
        )}
        
        {/* M-Pesa Payment Fields */}
        {formData.paymentMethod === 'mpesa' && (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
              <div className="flex items-start">
                <Smartphone className="w-5 h-5 text-green-600 mt-0.5 mr-2" />
                <div className="text-sm text-green-800">
                  <p className="font-medium mb-1">How M-Pesa payment works:</p>
                  <ol className="list-decimal list-inside space-y-1 text-green-700">
                    <li>Enter your M-Pesa registered phone number</li>
                    <li>Click "Complete Order" to proceed</li>
                    <li>You'll receive an STK push on your phone</li>
                    <li>Enter your M-Pesa PIN to complete payment</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                M-Pesa Phone Number *
              </label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-2.5 w-5 h-5 text-green-600" />
                <input
                  type="tel"
                  name="mpesaNumber"
                  value={formData.mpesaNumber}
                  onChange={(e) => {
                    const formatted = formatMpesaNumber(e.target.value);
                    setFormData(prev => ({ ...prev, mpesaNumber: formatted }));
                  }}
                  maxLength="13"
                  className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.mpesaNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="0712 345 678"
                />
              </div>
              {errors.mpesaNumber && <p className="mt-1 text-sm text-red-600">{errors.mpesaNumber}</p>}
              <p className="mt-1 text-xs text-gray-500">
                Enter the phone number registered with M-Pesa (e.g., 0712345678)
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Additional Options */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Options</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Instructions (Optional)
            </label>
            <textarea
              name="deliveryInstructions"
              value={formData.deliveryInstructions}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any special instructions for delivery..."
            />
          </div>
          
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                Subscribe to our newsletter for updates and special offers
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total Amount:</span>
          <span className="text-blue-600">KSH {cartTotal.toLocaleString()}</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isLoading}
        className={`w-full py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg transition-colors ${
          formData.paymentMethod === 'mpesa' 
            ? 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500' 
            : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
        }`}
      >
        {isLoading ? (
          formData.paymentMethod === 'mpesa' ? 'Initiating M-Pesa Payment...' : 'Processing Payment...'
        ) : (
          formData.paymentMethod === 'mpesa' 
            ? `Pay with M-Pesa - KSH ${cartTotal.toLocaleString()}`
            : `Complete Order - KSH ${cartTotal.toLocaleString()}`
        )}
      </button>
    </div>
  );
};

export default CheckoutForm;