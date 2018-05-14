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
  height: '600px',
  width: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'black',
  position: 'relative',
  zIndex: 2,
  borderRadius: '50%',
});

export const Div = styled('div')(
  {
    borderWidth: '10px',
    background: 'black',
    position: 'relative',
    borderRadius: '50%',
    marginBottom: '25%',
    '&:after': {
      boxShadow: '0 0 50px hotpink',
      content: '""',
      position: 'absolute',
      top: 'calc(-1 * 10px)',
      left: 'calc(-1 * 10px)',
      height: 'calc(100% + 10px * 2)',
      width: 'calc(100% + 10px * 2)',
      background:
        'linear-gradient(60deg, hotpink, #ff0084, #f80759, #5073b8, #1098ad, #07b39b, #6fba82)',
      borderRadius: '50%',
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
    paddingRight: '40px',
  },
  props => ({ fontSize: props.fontSize }),
);

export const Main = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundImage: 'url("../../static/background.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
