import styled from 'react-emotion';

export const Div = styled('div')(
  {
    height: '500px',
    width: '700px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: '1px solid',
    borderRadius: '15px',
    borderImageSource: 'linear-gradient(135deg, #ff32f1 0%,#2db6ce 100%)',
    borderImageSlice: '50',
  },
  props => ({ backgroundColor: props.color }),
);

export const Emotion = styled('h1')(
  {
    color: 'hotpink',
  },
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
