import React from 'react';

export const Album = (props) => {
  return (

    <div className="rubrik">
      <h1>{props.item.name}</h1>
      <img alt="hej" src={props.item.images.url} />
    </div>
  )
}
