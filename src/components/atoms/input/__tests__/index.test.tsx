import { render } from '@testing-library/react';
import Input from '..';

describe('Input', () => {
  it('Renders Input', () => {
    const component = render(<Input />);

    expect(component).toBeTruthy();
    expect(component.asFragment()).toMatchSnapshot();
  });
});
