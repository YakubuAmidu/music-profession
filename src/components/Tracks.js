import React, { Component } from 'react';

class Tracks extends Component {
  render() {
    const { traccks } = this.props;

    return (
      <div>
        {traccks.map((track) => {
          const { name, album } = traccks;
        })}
      </div>
    );
  }
}
