import React from 'react';

export default function Main(props) {
  const {products, onAdd} = props;
  return <main>
  <h2>Products</h2>
 <div className="row">
   {products.map((product) => (
      <product key={product.id} product= {product} onAdd={onAdd}></product>
   ))}
 </div>
  </main>
}