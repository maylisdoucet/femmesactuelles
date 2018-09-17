import React, { Component } from 'react';
import './Travelers.css';

import Questions from './Questions';

class Travelers extends Component {

  render() {
    return (
      <div className="Travelers container">
        <div className="content">
          <div className="roadtripers">
            <Questions />
          </div>
        </div>
      </div>
    )
  }
}

export default Travelers;