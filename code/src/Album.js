import React from 'react';

export const Album = (props) => {
  return (

    <div className="rubrik">
      <h1>{props.item.name}</h1>
      <a href={props.item.external_urls.spotify}>
        <img src={props.item.images.find((image) => image.width === 300).url} alt="album cover" />
      </a>
    </div>
  )
}
