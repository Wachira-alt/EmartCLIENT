// integrates cart + form
import React, { useState, useMemo } from 'react';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import { ShoppingCart } from 'lucide-react';

export default function CheckoutPage({ initialCartItems = [] }) {
  // — Cart state & handlers (same as before)
  const [cartItems, setCartItems] = useState(initialCartItems);
  const handleUpdateQuantity = (itemId, newQty) => {
    setCartItems(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQty > 0 ? newQty : 1 }
          : item
      )
    );
  };
  const handleRemoveItem = (itemId) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  // — Compute total
  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  // — Form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const orderPayload = {
        customer: formData,
        items: cartItems.map(({ id, name, price, quantity }) => ({
          id, name, price, quantity
        })),
        total: cartTotal,
        orderedAt: new Date().toISOString(),
      };
      console.log('Submitting order:', orderPayload);
      // await api.post('/orders', orderPayload);
      // navigate('/order-confirmation', { state: { order: resp } });
    } catch (err) {
      console.error('Order submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 my-10">
      {/* Cart Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCart className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Your Cart</h2>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-between items-center text-lg font-semibold">
          <span>Subtotal:</span>
          <span className="text-indigo-600">
            KSh {cartTotal.toLocaleString()}
          </span>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCart className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Checkout</h2>
        </div>
        <CheckoutForm
          cartTotal={cartTotal}
          isLoading={isSubmitting}
          onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
}
