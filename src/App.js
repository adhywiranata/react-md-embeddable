import * as fs from 'fs-web';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './App.css';

const CodeBlock = require('./CodeBlock');

const lightTheme = {
  color: 'black',
};

const darkTheme = {
  background: '#222222',
  color: '#FFFFFF',
};

const initialSource = `

# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)

* Renders actual, "native" React DOM elements

* Allows you to escape or skip HTML (try toggling the checkboxes above)

* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

\`\`\`javascript
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);

\`\`\`

Pretty neat, eh?

## Tables?

| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
`

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
        <ReactMarkdown
          source={this.state.source}
          renderers={{code: CodeBlock}}
        />
      </div>
    );
  }
}

export default App;
