import React from 'react';
import ReactDOM from 'react-dom';

class Result extends React.Component {
  render() {
    return (
      <div id="result">
        <h1>HEY</h1>
      </div>
    );
  }
}

ReactDOM.render(<Result />, document.getElementById('result'));
