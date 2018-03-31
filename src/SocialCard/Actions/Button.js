import React from 'react';

const Button = (props) => {
  const btnStyle = {
    color: props.color,
  };

  return (
    <div style={btnStyle} className="Button" onClick={props.click}><i className={props.icon}/> {props.count}</div>
  );
};

export default Button;
