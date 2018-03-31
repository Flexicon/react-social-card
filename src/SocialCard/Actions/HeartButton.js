import React from 'react';
import Button from './Button';

const HeartButton = (props) => {
  return (
    <Button icon="far fa-heart" count={props.count} color="red" click={props.click}/>
  );
};

export default HeartButton;
