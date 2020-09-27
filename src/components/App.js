import React, { Component } from 'react';

class App extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = (event) => {
    console.log('vent.target.value', event.target.value);
    this.setState({ artistQuery: event.target.value });
  };

  searchArtist = () => {
    console.log('this.state', this.state);
  };

  render() {
    return (
      <div>
        <h2>Music Profession</h2>
        <input
          onChange={this.updateArtistQuery}
          placeholder='Search for an artist'
        />
        <button>Search</button>
      </div>
    );
  }
}

export default App;
