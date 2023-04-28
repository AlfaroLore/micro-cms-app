import { render } from '@testing-library/react';
import BrandLogo from '..';

describe('BrandLogo', () => {
  it('Renders BrandLogo', () => {
    const component = render(<BrandLogo />);

    expect(component).toBeTruthy();
    expect(component.asFragment()).toMatchSnapshot();
  });
});
