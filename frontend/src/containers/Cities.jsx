import React, { Component } from 'react';
import './Cities.css';

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      towns: []
    }
  }

  componentDidMount() {
    this.filterBy();
  }

  filterBy(opt = "") {
    fetch(`/cities/${opt}`)
      .then(res => res.json())
      .then(towns => this.setState({ towns }));
  }

  render() {
    return (
      <div className="Cities container">

        <div className="content">
          <div className="options">
            <div className="btn" onClick={() => this.filterBy("visited")}>PAST EXHIBITIONS</div>
            <div className="btn" onClick={() => this.filterBy()}>ALL EXHIBITIONS</div>
            <div className="btn" onClick={() => this.filterBy("to-visit")}>NEXT EXHIBITIONS</div>
          </div>

          <div className="expo">
            {
              this.state.towns.map(town => (
                <div key={town.id} className="exhibit">
                  <span className={(town.visited) ? "visited" : ""}>{town.name} in {town.place} 👉 {town.comment}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Cities;