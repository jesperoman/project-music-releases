import React from 'react';
// import { FlipCard } from 'FlipCard';
import data from './data.json';
import { Album } from './album/Album';
import { Title } from './album/Title';

console.log(data);

console.log('hej');
const albumItems = data.albums.items;

export const App = () => {
  return (
    <div className="records">
      <Title title="Evas skivor" />
      {
        albumItems.map((item) => (
          <Album item={item} key={Math.random()} />
        ))
      }
    </div>
  )
}
