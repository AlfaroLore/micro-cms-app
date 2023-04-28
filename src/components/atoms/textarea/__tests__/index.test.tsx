import { render } from '@testing-library/react';
import TextArea from '..';

describe('TextArea', () => {
  it('Renders TextArea', () => {
    const component = render(<TextArea />);

    expect(component).toBeTruthy();
    expect(component.asFragment()).toMatchSnapshot();
  });
});
