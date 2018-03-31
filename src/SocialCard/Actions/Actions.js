import React from 'react';
import CommentButton from './CommentButton';
import ShareButton from './ShareButton';
import HeartButton from './HeartButton';

const Actions = (props) => {
  return (
    <div className="Actions pt-1 pb-1">
      <CommentButton count={props.comments} click={() => props.incrementKeyHandler('comments')}/>
      <ShareButton count={props.shares} click={() => props.incrementKeyHandler('shares')}/>
      <HeartButton count={props.hearts} click={() => props.incrementKeyHandler('hearts')}/>
    </div>
  );
};

export default Actions;
