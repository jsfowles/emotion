import React from 'react';
import ReactRevealText from 'react-reveal-text';
import { Main, Div, Container, Emotion, Border } from './styles';

import { injectGlobal } from 'react-emotion';

injectGlobal`
@font-face {
  font-family: 'Streamster';
  src: url('/static/fonts/streamster-webfont.woff');
  src: url('/static/fonts/streamster-webfont.woff2');
  font-weight: 300;
  font-style: normal;
  font-stretch: normal
}
`;

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
          <Container>
            <Border>
              <Emotion fontSize={'6vw'}>
                <ReactRevealText show={this.state.show} delayMin={0}>
                  Eleanor
                </ReactRevealText>
              </Emotion>
            </Border>
          </Container>
        </Div>
      </Main>
    );
  }
}
