import React, { Component } from 'react';
import Welcome from './Welcome.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    }
  }

  render() {
    return (
      <div>
        {this.state.names.map((name,i) =>
          <Welcome name={name} key={i} />
        )}
      </div>
    );
  }
}

export default App;
