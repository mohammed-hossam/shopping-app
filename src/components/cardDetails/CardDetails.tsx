import React from 'react';
import './cardDetails.scss';

interface CardDetailsPropsType {
  title: string;
  description: string;
  category: string;
  image: string;
}

function CardDetails(props: CardDetailsPropsType) {
  const { title, description, category, image } = props;
  return (
    <div className="card">
      <div className="card_img">
        <img src={image} alt="product" />
      </div>

      <div className="card_details">
        <p className="card_details_category">{category}</p>
        <p className="card_details_title">{title}</p>
        <p className="card_details_description">{description}</p>
      </div>
    </div>
  );
}

export default CardDetails;
