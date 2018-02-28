import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import MarkdownRenderer from '@components/MarkdownRenderer';

const defaultProps = {
  source: `
# Hello World

Goto [Underbelly](https://underbelly.is)
`,
};

const generateComponent = (additionalProps = {}) => {
  const newProps = {
    ...defaultProps,
    ...additionalProps,
  };
  return <MarkdownRenderer { ...newProps } />;
};

it('renders with props', () => {
  const wrapper = shallow(generateComponent());
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
