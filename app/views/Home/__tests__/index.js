import { shallow, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Home from '@views/Home';

jest.mock('../../../../README.md', () => 'Hello World');

describe('Home View', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Home />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
