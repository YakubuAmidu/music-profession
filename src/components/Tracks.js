import React, { Component } from 'react';

class Tracks extends Component {
  render() {
    const { traccks } = this.props;

    return (
      <div>
        {traccks.map((track) => {
          const { name, album } = tracck;

          return (
            <div key={id}>
              <img src={album.images[0].url} alt='track-image' />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tracks;
