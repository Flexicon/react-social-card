import React from 'react';
import './SocialCard.css';
import CardContent from './CardContent/CardContent';
import Actions from './Actions/Actions';

const SocialCard = (props) => {
  return (
    <div className="SocialCard">
      <CardContent post={props.post}/>
      <Actions comments={props.post.comments}
               shares={props.post.shares}
               hearts={props.post.hearts}
               incrementKeyHandler={props.incrementKeyHandler}/>
    </div>
  );
};

export default SocialCard;
