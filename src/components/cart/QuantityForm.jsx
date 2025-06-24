import React, { useState } from 'react';

const QuantityForm = ({ onUpdate, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(quantity);
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, e.target.value))}
          min="1"
          className="border p-1 w-16"
        />
        <button type="submit" className="bg-blue-500 text-white p-1 ml-2">Update</button>
      </form>
    </div>
  );
};

export default QuantityForm;