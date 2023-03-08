import React from 'react';

export const FlipCard = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {props.front}
        </div>
        <div className="flip-card-back">
          {props.back}
        </div>
      </div>
    </div>)
}