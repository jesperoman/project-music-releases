import React from 'react';

export const Album = (props) => {
<<<<<<< HEAD
  return (<h1>{props.item.name}</h1>)
}
=======
  const artists = props.item.artists.map((artist) => ({
    name: artist.name,
    url: artist.external_urls.spotify
  }));
  const artistLinks = artists.map((artist) => (
    <a key={artist.url} href={artist.url} target="_blank" rel="noopener noreferrer">{artist.name}</a>
  ));

  return (
    <div className="body">

      <div className="image-container">
        <a href={props.item.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          <img className="album-image" src={props.item.images.find((image) => image.width === 300).url} alt="album cover" />
        </a>
        <div className="icons-container">
          <img src="./icons/heart.svg" className="heart-icon" alt="heart icon" />
          <img src="./icons/play.svg" className="play-icon" alt="play icon" />
          <img src="./icons/dots.svg" className="dots-icon" alt="dots icon" />
        </div>
      </div>

      <div className="album-name">
        <h1 className="album-name">{props.item.name}</h1>
      </div>

      <div className="artist-name">
        <h2>{artistLinks}</h2>
      </div>

    </div>
  )
}
>>>>>>> refs/remotes/origin/master
