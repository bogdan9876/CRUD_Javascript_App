import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/loader';
import { getLampById } from '../../api';
import { addToCart } from '../../cartActions';
import './lampDetail.css';

function LampDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lamp, setLamp] = useState(null);
  const [color, setColor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const hasMounted = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLamp = async () => {
      setIsLoading(true);
      try {
        const data = await getLampById(id);
        setLamp(data);
      } catch (error) {
        console.error('Error fetching lamp details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (hasMounted.current) {
      fetchLamp();
    } else {
      hasMounted.current = true;
    }
  }, [id]);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader />
      </div>
    );
  }
  
  if (!lamp) {
    return <div>Lamp not found</div>;
  }

  const handleGoBack = () => {
    navigate('/catalog');
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(lamp));
    console.log("ROman");
  };

  return (
    <div className="lamp-detail-container">
      <div className="lamp-detail">
        <img src={process.env.PUBLIC_URL + '/' + lamp.image} alt={lamp.title} width="700" height="500" />
        <div className="lamp-info">
          <button className="characteristic-btn blue">1 characteristic</button>
          <button className="characteristic-btn black">2 characteristic</button>
          <h3>{lamp.title}</h3>
          <p>{lamp.description}</p>
          <div className="lamp-detail-add-info">
            <div className="lamp-id">
              <h4>ID</h4>
              <p className="lamp-id-number">{lamp.id}</p>
            </div>
            <div className="lamp-selector-container">
              <h4>Select Color:</h4>
              <select className="lamp-selector" value={color} onChange={handleColorChange}>
                <option>Select</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="lamp-actions">
        <p className="lamp-price">Price: {lamp.price} uah</p>
        <div className="action-buttons">
          <button onClick={handleGoBack}>Go Back</button>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default LampDetail;
