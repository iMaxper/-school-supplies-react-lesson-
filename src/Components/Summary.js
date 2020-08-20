import React from 'react';
import '../App.css';

function Summary(props) {
  return(
    <div className="summary">
      <p>This is your Cart Total summary!</p>
      <p>You bought: </p>
      <p>Laptops: {props.cart2.laptop}</p>
      <p>Pencils: {props.cart2.pencils}</p>
      <p>Paper: {props.cart2.paper}</p>
    </div>
  );
}

export default Summary;
