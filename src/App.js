import * as fs from 'fs-web';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './App.css';

const lightTheme = {
  color: 'black',
};

const darkTheme = {
  background: '#222222',
  color: '#FFFFFF',
};

class App extends Component {
  state = {
    source: '',
  }

  componentDidMount() {
    this.setState({ source: 'loading...' });
    axios('https://raw.githubusercontent.com/adhywiranata/react-md-embeddable/master/markdowns/001.md')
      .then((res) => this.setState({ source: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div style={{...lightTheme, padding: 20 }}>
        <ReactMarkdown source={this.state.source} />
      </div>
    );
  }
}

export default App;
