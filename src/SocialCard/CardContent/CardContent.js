import React from 'react';
import Body from './Body';
import CardImage from './CardImage';

const CardContent = (props) => {
  return (
    <div className="card CardContent">
      <CardImage imageSrc={props.post.imageSrc} title={props.post.title}/>
      <Body title={props.post.title} description={props.post.description}/>
    </div>
  );
};

export default CardContent;
