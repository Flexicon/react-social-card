import React from 'react';

const CardImage = (props) => {
  return (
    <img className='card-img-top CardImage' src={props.imageSrc} alt={props.title}/>
  );
};

export default CardImage;
