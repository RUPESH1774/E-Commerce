import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import './Product.css'
export default function Product() {
  const Navi = useNavigate()
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((result) => result.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log('Error fetching', error));
  };

  useEffect(() => {
    getData();
  }, []);

  const AddCart = (Product) => {
    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const isAlready = existing.some(item => item.id === Product.id);
  
    if (!isAlready) {
      const updatedCart = [...existing, Product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert('Item added successfully');
    } else {
      alert('Item is already in cart');
    }
  };
  return (
    <div>
      <Navbar />
      <h2  className='text-center my-4 bg-info mx-5 rounded  phead'>All Products</h2>

      <div className='products' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {data.map((product) => (
          
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.images} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className='bg-dark text-light text-center'>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description.substring(0, 60)}...</Card.Text>
                <span className='fs-4 text-uppercase bg-danger p-1 rounded-4'> Price: {product.price}$</span><br /> <br />
                <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="btn btn-outline-success">View Details</Button>&nbsp;&nbsp;
               </Link>
               <Link to={'/Cart'}> <Button variant="btn btn-outline-danger" onClick={() => AddCart(product)}>ADD To Cart</Button>
               </Link>
              </Card.Body>
            </Card>
        ))}
      </div>
    </div>
  );
}
