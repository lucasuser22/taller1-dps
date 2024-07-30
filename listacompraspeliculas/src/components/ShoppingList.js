import React, { useState } from 'react';
import Picker from './Picker';  // Importar Picker

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (movie) => {
    setItems(prevItems => [...prevItems, { ...movie, cantidad: 1 }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const updateQuantity = (index, quantity) => {
    const newItems = items.map((item, i) => i === index ? { ...item, cantidad: quantity } : item);
    setItems(newItems);
  };

  React.useEffect(() => {
    const newTotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    setTotal(newTotal.toFixed(2));
  }, [items]);

  return (
    <div>
      <h1>Lista de Compras</h1>
      <Picker onAdd={addItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.nombre}</span>
            <span>${item.precio.toFixed(2)}</span>
            <input
              type="number"
              min="1"
              value={item.cantidad}
              onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
            />
            <svg onClick={() => removeItem(index)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" stroke-width="0" fill="currentColor" />
              <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" stroke-width="0" fill="currentColor" />
            </svg>
           
          </li>
        ))}
      </ul>
      <div>Total: ${total}</div>
    </div>
  );
}

export default ShoppingList;
