import React from 'react';
import { FlipCard } from 'FlipCard';
import { Title } from './Title'

export const Album = (props) => {
  return (
    <div className="album">
      <Title title={props.item.name} />
      <div>
        {
          props
            .item
            .artists
            .map(
              (artist) => (
                <a href={artist.external_urls.spotify} key={Math.random()}>
                  {artist.name}
                </a>
              )
            )
        }
      </div>
      <FlipCard front={<img alt="hej" src={props.item.images[0].url} />} back={<div>Backside</div>} />
    </div>
  )
}