import { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999.99, description: 'A powerful laptop for professionals. Ideal for multitasking.' },
    { id: 2, name: 'Headphones', price: 199.99, description: 'Noise-cancelling over-ear headphones.' },
    { id: 3, name: 'Smartphone', price: 799.99, description: 'A high-end smartphone with great features.' },
    { id: 4, name: 'Tablet', price: 499.99, description: 'A lightweight tablet perfect for reading and browsing.' },
    { id: 5, name: 'Smartwatch', price: 249.99, description: 'A smartwatch with health tracking features.' },
    { id: 6, name: 'Gaming Mouse', price: 89.99, description: 'Ergonomic mouse designed for gamers.' },
    { id: 7, name: 'Mechanical Keyboard', price: 129.99, description: 'Tactile keyboard with RGB lighting. Excellent for typing and gaming.' },
    { id: 8, name: '4K Monitor', price: 399.99, description: 'Ultra HD monitor with vibrant colors.' },
    { id: 9, name: 'External SSD', price: 149.99, description: 'Fast and portable storage solution. Perfect for backups and large files.' },
    { id: 10, name: 'Wireless Router', price: 119.99, description: 'High-speed router with long range connectivity.' },
    { id: 11, name: 'Webcam', price: 89.99, description: '1080p HD webcam for video calls and streaming.' },
    { id: 12, name: 'Bluetooth Speaker', price: 59.99, description: 'Portable speaker with excellent sound quality.' },
  ]);

  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="app-header">
        <h1>Gadget Grid</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <p>🛒 Total Cart Items: {cart.length}</p>
      <ProductList
        products={products}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;