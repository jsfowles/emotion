import styled, { keyframes, injectGlobal } from 'react-emotion';

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
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'black',
  position: 'relative',
  zIndex: 2,
  borderRadius: '50%',
});

export const Div = styled('div')({
  position: 'relative',
  width: '40%',
  maxWidth: '600px',

  '&:after': {
    content: '""',
    display: 'block',
    paddingBottom: '100%',
  },
});

export const Container = styled('div')(
  {
    borderWidth: '0.2vw',
    background: 'black',
    position: 'absolute',
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    '&:after': {
      boxShadow: '0 0 50px hotpink',
      content: '""',
      position: 'absolute',
      top: 'calc(-1 * 0.2vw)',
      left: 'calc(-1 * 0.2vw)',
      height: 'calc(100% + 0.2vw * 2)',
      width: 'calc(100% + 0.2vw * 2)',
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
  },
  props => ({ fontSize: props.fontSize }),
);

export const Main = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundImage:
    'url("https://pre00.deviantart.net/51d4/th/pre/f/2015/322/1/0/the_grid___komodo_upload_02_by_winampers_pro-d9h4oaw.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
