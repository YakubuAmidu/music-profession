import React, { Component } from 'react';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <h2>Music Profession</h2>
        <input placeholder='Search for an artist' />
        <button>Search</button>
      </div>
    );
  }
}

export default App;
