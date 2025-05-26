import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList({ products, cart, onAddToCart, onRemoveFromCart }) {
  return (
    <div className="product-list">
      {products.map(product => {
        const quantity = cart.filter(item => item.id === product.id).length;
        return (
          <ProductItem
            key={product.id}
            product={product}
            quantity={quantity}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        );
      })}
    </div>
  );
}

export default ProductList;