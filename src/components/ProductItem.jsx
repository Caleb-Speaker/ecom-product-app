import './ProductItem.css';

function ProductItem({ product, quantity, onAddToCart, onRemoveFromCart }) {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <p><strong>In Cart:</strong> {quantity}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <button onClick={() => onRemoveFromCart(product.id)} disabled={quantity === 0}>
        Remove from Cart
      </button>
    </div>
  );
}

export default ProductItem;