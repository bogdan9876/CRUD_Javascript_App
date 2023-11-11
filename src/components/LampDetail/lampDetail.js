import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lamps from '../LampData/lampData';
import './lampDetail.css';

function LampDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lamp = lamps.find((lamp) => lamp.id === parseInt(id));

  if (!lamp) {
    return <div>Lamp not found</div>;
  }

  const handleGoBack = () => {
    navigate('/catalog');
  };

  return (
    <div className="lamp-detail-container">
      <div className="lamp-detail">
        <img src={process.env.PUBLIC_URL + '/' + lamp.image} alt={lamp.title} width="700" height="500" />
        <div className="lamp-info">
          <h3>{lamp.title}</h3>
          <p>{lamp.description}</p>
        </div>
      </div>
      <div className="lamp-actions">
        <p className="lamp-price">Price: {lamp.price} uah</p>
        <div className="action-buttons">
        <button onClick={handleGoBack}>Go Back</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default LampDetail;
