import React from 'react';
import TextLoop from 'react-text-loop';
import ReactRevealText from 'react-reveal-text';
import { Main, Div, Emotion, Border } from './styles';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
  }
  render() {
    return (
      <Main>
        <Div>
          <Border>
            <Emotion fontSize={'100px'}>Eleanor Ray</Emotion>
          </Border>
        </Div>
      </Main>
    );
  }
}
