import React, { Component } from 'react';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = (event) => {
    console.log('vent.target.value', event.target.value);
    this.setState({ artistQuery: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  };

  searchArtist = () => {
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
      });
  };

  render() {
    return (
      <div>
        <h2>Music Profession</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an artist'
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default App;
