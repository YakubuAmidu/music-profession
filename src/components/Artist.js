import React from 'react';

const Artist = ({ artist }) => {
  const { images, name, followers, genres } = artist;

  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(',')}</p>
      <img src={images[0].url} alt='artist-profile' />
    </div>
  );
};
