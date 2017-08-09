import glamorous from 'glamorous';

export default glamorous.div(
  {
    position: 'relative',
    height: 0,
  },
  ({ paddingBottom }) => paddingBottom && ({ paddingBottom }),
);
