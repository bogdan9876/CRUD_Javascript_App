import React from 'react';
import { useParams } from 'react-router-dom';
import lamps from '../LampData/lampData';
import './lampDetail.css';

function LampDetail() {
  const { id } = useParams();
  const lamp = lamps.find((lamp) => lamp.id === parseInt(id));

  if (!lamp) {
    return <div>Lamp not found</div>;
  }

  return (
    <div className="lamp-detail">
      <img src={process.env.PUBLIC_URL + '/' + lamp.image} alt={lamp.title} width="300" height="250"/>
      <h3>{lamp.title}</h3>
      <p>{lamp.description}</p>
      <p className="price">Price: {lamp.price} uah</p>
    </div>
  );
}

export default LampDetail;
