import React, { Component } from 'react';
import './Travelers.css';
import YouTube from 'react-youtube';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    this.sortBy("city");
  }

  sortBy(_sort) {
    fetch(`/films/sort/${_sort}`)
      .then(res => res.json())
      .then(films => this.setState({ films }));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute();
  }
  
  _onEnd(event) {
    event.target.playVideo();
  }

  render() {

  const videoOptions = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0
    }
  };

    return (
      <div className="Travelers container">

        <div className="content">
          <div className="options">
            <div className="btn" onClick={() => this.sortBy("city")}>SORTED BY CITIES</div>
            <div className="btn" onClick={() => this.sortBy("date")}>SORTED BY NAMES</div>
            <div className="btn" onClick={() => this.sortBy("name")}>SORTED BY DATES</div>
          </div>

          <div className="roadtripers">
            {
              this.state.films.map(film => (
                <div key={film.id} >
                  <div>{film.name.toUpperCase()}</div>
                  <div>{film.date}</div>
                  <div>{film.city}</div>
                  <YouTube
                    videoId={film.link}
                    opts={videoOptions}
                    className="video-iframe"
                    onReady={this._onReady}
                    onEnd={this._onEnd}
                  />
                 
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Films;