import styled, { keyframes } from 'react-emotion';

export const Bounce = keyframes`
0% {
  background-position: 0% 50%
}
50% {
  background-position: 100% 50%
}
100% {
  background-position: 0% 50%
}
`;

export const Border = styled('div')({
  height: '500px',
  width: '900px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'black',
  position: 'relative',
  zIndex: 2,
  borderRadius: '5px',
});

export const Div = styled('div')(
  {
    background: '#1D1F20',
    borderWidth: '3px',
    position: 'relative',
    borderRadius: '5px',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 'calc(-1 * 3px)',
      left: 'calc(-1 * 3px)',
      height: 'calc(100% + 3px * 2)',
      width: 'calc(100% + 3px * 2)',
      background:
        'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
      borderRadius: 'calc(2 * 3px)',
      zIndex: 1,
      animation: `${Bounce} 3s ease alternate infinite`,
      backgroundSize: '300% 300%',
    },
  },
  props => ({ backgroundColor: props.color }),
);

export const Emotion = styled('h1')(
  {
    color: 'hotpink',
    fontFamily: 'Streamster',
    lineHeight: '150px',
    letterSpacing: '4px',
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
