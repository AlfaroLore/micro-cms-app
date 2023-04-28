import { render } from '@testing-library/react';
import Button from '..';

describe('Button', () => {
  it('Renders Button', () => {
    const component = render(<Button />);

    expect(component).toBeTruthy();
    expect(component.asFragment()).toMatchSnapshot();
  });
});
