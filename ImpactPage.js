import React from 'react';

class ImpactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

handleRestartClick = () => {
    window.location.href = '/';
  };

render() {
    return (
      <div>
        <h1>Impact</h1>
        <p>
          sentence
        </p>
        <p>
          sentence
        </p>
        <p>
          sentence
        </p>
        <p>
          sentence
        </p>
        <button onClick={this.handleRestartClick}>Click to Restart</button>
      </div>
    );
  }
}

export default ImpactPage;
