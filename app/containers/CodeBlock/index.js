import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';

export default class CodeBlock extends React.PureComponent {
  static defaultProps = {
    language: '',
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  setRef = (el) => {
    this.codeEl = el;
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    return (
      <pre>
        <code ref={ this.setRef } className={ this.props.language }>
          {this.props.value}
        </code>
      </pre>
    );
  }
}
