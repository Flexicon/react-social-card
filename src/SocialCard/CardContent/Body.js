import React from 'react';

const Body = (props) => {
  return (
    <div className="card-body p-3 Body">
      <div className="card-title">{props.title}</div>
      <div className="card-text">{props.description}</div>
    </div>
  );
};

export default Body;
