import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ProD.css'
export default function ProductDetail() {
  
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const navi = useNavigate()

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => res.json()).then((data) => setProduct(data))
      .catch((error) => console.log('Error fetching product:', error));
  }, [id]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
    navi('/Cart')
  };

  if (!product) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-3 ">

        <h1 className='text-center phead bg-dark text-light text-uppercase rounded-4 '>Product Details</h1>
     

    <div className='bg-dark text-light p-3 rounded-2' style={{boxShadow:'10px 11px 8px black'}}>
      <div className="row">
        <div className="col-md-6">
          <img src={product.images} alt={product.title} className="img-fluid rounded-5 "style={{boxShadow:'15px 15px 11px black'}} />
        </div>

        {/*  */}
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <h4 className="text-success text-center">Price: ${product.price}</h4>
          <p>{product.description}</p>

          <Button variant="success" onClick={handleAddToCart}>
            Add to Cart
          </Button> <br /> <br />
          <Link to="/Product">
        <Button variant="secondary" className="mb-4">Back to Products</Button>
      </Link>
        </div>
      </div>

    </div>
    </div>
  );
}
