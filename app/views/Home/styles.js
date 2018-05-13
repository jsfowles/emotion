import glamorous from 'glamorous';
import styled, { css } from 'react-emotion';

export const Div = glamorous.h1({
  color: 'red',
});

export const Emotion = styled('h1')(
  {
    color: 'green',
  },
  props => ({ backgroundColor: props.color }),
  props => ({ fontSize: props.fontSize }),
);

export const Main = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
