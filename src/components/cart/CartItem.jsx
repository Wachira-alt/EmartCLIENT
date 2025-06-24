// Reusable UI for one cart item

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded mb-4">
      <div className="flex items-center gap-4">
        <img src={item.image_url} alt={item.name} className="w-20 h-20 object-cover" />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p>KSh {item.price} × {item.quantity}</p>
          <p className="font-bold text-blue-600">Total: KSh {(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={e => onUpdateQuantity(item.id, parseInt(e.target.value))}
          className="w-16 p-1 border rounded"
        />
        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}