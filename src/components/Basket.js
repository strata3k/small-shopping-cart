import React from 'react';

export default function Basket(props) {
  const {cartItems, onAdd, onRemove} = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;
  return (
  <aside className="block col-1">
  <h2>Cart Items</h2>
    <div>
      {cartItems.length === 0 && <div>Cart Is Empty</div>}
    </div>
    {cartItems.map((item) => (
      <div key={item.id} className="row">
        <div className="col-2">{item.name}</div>
        <div className="col-2">
          <button onClick={() =>onAdd(item)} className="add">+</button>
          <button onClick={() =>onRemove(item)} className="add">-</button>
      </div>
      <div className="col-2 text-right">
      {item.qty} X ${item.price.toFixed(2)}
      </div>
    </div>

    ))}
  </aside>
  );
}