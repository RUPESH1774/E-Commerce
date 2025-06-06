import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  const navi = useNavigate()
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleOrderConfirm = async () => {
    
    try {
      for (const item of cart) {
        const backend = {
          ID: item.id,
          images: item.images,
          Title: item.title,
          Price: item.price,
        };
  
        const response = await fetch('http://localhost:8000/Checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(backend),
        });
  
        const result = await response.json();
        if (result) {
          localStorage.setItem('data', JSON.stringify(result));
        }
      }
  
      localStorage.removeItem('cart');
      setCart([]);
      setConfirmed(true);
      alert('Booking Completed');

    } catch (err) {
      console.error('Something went wrong, please try again.', err);
      alert('Order failed. Please try again.');
    } 
  };

  if (confirmed) {
    return (
      <div className="container mt-5 text-center p-3 border border-2 border-dark rounded-3" style={{backgroundColor:'burlywood',boxShadow:'10px 11px 11px'}}>
      <h2>Thank you for your purchase!</h2>
      <p>Your order has been placed successfully.</p>
        <img className='img-fluid' style={{height:'30vh' ,borderRadius:'20px',boxShadow:'10px 11px 12px 6px'}} src="https://i.pinimg.com/originals/a5/88/04/a58804bceadd760c89f0fa2909106cd9.gif" alt="" /> <br /> <br />
      <Button variant="success" onClick={() => navi('/')}>Back to Home</Button>
    </div>
    );
  }

  return (
    <div className="container mt-5 p-3"style={{backgroundColor:'ButtonHighlight',boxShadow:'10px 10px 11px black'}}>
      <h2 className="text-center mb-4 bg-success rounded-3">Checkout</h2>
      {cart.map((item, index) => (
        <div key={index} className="border-bottom pb-2 mb-2 text-center  ">
           <h2>{item.id}</h2>
          <img src={item.images} alt="images" style={{ height: '200px', objectFit: 'cover' }}  />
          <h5>{item.title}</h5>
          <p>${item.price}</p>
        </div>
      ))}
      <div className='text-center'>
      <h4 className='text-center'>Total: ${totalPrice.toFixed(2)}</h4><br />
      <Button variant="btn btn-outline-success " onClick={handleOrderConfirm}>Confirm Order</Button>
    </div>
    </div>
  );
}
