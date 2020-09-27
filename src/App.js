import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Yakubu. I'm a software engineer.</p>
        <p>I'm always looking farward to working on meaningful projects.</p>

        {this.state.displayBio ? (
          <div>
            <p>I live California and I code everyday</p>
            <p>
              My favorite language is javascript, and I think React.js is
              Awesome
            </p>
            <p>Besides coding, I like fishing and I fish every weekend</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
