import * as fs from 'fs-web';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  state = {
    source: '',
  }

  componentDidMount() {
    this.setState({ source: 'loading...' });
  }

  render() {
    return (
      <ReactMarkdown source={this.state.source} />
    );
  }
}

export default App;
