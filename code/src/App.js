import React from 'react';
import data from './data.json';
import { Album } from './Album.js';

console.log(data);

const albumItems = data.albums.items.map((item, index) => {
  item.key = index;
  return item;
});

export const App = () => {
  return (
    <div>
      {
        albumItems.map((item) => (
          <Album item={item} key={item.key} />
        ))
      }
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> refs/remotes/origin/master
