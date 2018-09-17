import React, { Component } from 'react';
import './Travelers.css';

class Travelers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelers: []
    }
  }

  componentDidMount() {
    this.sortBy("city");
  }

  sortBy(_sort) {
    fetch(`/travelers/sort/${_sort}`)
      .then(res => res.json())
      .then(travelers => this.setState({ travelers }));
  }

  render() {
    return (
      <div className="Travelers container">

        <div className="content">
          <div className="options">
            <div className="btn" onClick={() => this.sortBy("city")}> SORTED BY CITIES</div>
            <div className="btn" onClick={() => this.sortBy("nameobjet")}>SORTED BY NAMES</div>
            <div className="btn" onClick={() => this.sortBy("date")}>SORTED BY DATES</div>
          </div>

          <div className="roadtripers">
            {
              this.state.travelers.map(traveler => (
                <div key={traveler.id} className="roadtriper">
                  <div>{traveler.nameobjet.toUpperCase()} </div>
                  
                  <div>{traveler.date}</div>
                  <div>{traveler.city}</div>
                    <div className="Image">
                    <img src={traveler.image} alt="femmes_actuelles_contemporary_art_souvenirs" height="200px"/>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Travelers;