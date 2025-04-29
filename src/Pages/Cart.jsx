import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Item removed from cart!');
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    alert('Cart cleared!');
  };

  const checkout = () => {
    alert('Order Placed Successfully!');
    localStorage.removeItem('cart');
    setCartItems([]);
    navi('/');
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-center my-4 bg-warning mx-5 rounded phead">Your Cart</h2>

      {cartItems.length === 0 ? (
        <h3 className="text-center text-danger">Cart is Empty</h3>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {cartItems.map(item => (
            <Card key={item.id} style={{ width: '18rem' }}>
              <Card.Img   variant="top"  src={item.images && item.images.length > 0 ? item.images[0] : 'default_image_url'} 
                style={{ height: '200px', objectFit: 'cover' }}  />
              <Card.Body className='bg-light text-dark text-center'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: {item.price} $</Card.Text>
                <Button variant="danger" onClick={() => removeItem(item.id)}>Remove</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )} <br />
      <div className='d-flex justify-content-center'>
      <button className='btn btn-outline-secondary text-uppercase ' onClick={()=>navi('/Product')}>Add Item</button>
      </div>
      {cartItems.length > 0 && (
        <div className="text-center my-4">
          <Button className="btn btn-outline-danger mx-3" onClick={clearCart}>Clear Cart</Button>
          <Button className="btn btn-outline-success mx-3" onClick={checkout}>Checkout</Button>
        </div>
      )}
    </div>
  );
}
