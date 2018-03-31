import React from 'react';
import Button from './Button';

const CommentButton = (props) => {
  return (
    <Button icon="far fa-comment" count={props.count} click={props.click}/>
  );
};

export default CommentButton;
