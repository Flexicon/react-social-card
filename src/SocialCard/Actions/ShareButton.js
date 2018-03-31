import React from 'react';
import Button from './Button';

const ShareButton = (props) => {
  return (
    <Button icon="fas fa-retweet" count={props.count} color="green" click={props.click}/>
  );
};

export default ShareButton;
