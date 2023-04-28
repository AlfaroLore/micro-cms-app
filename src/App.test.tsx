import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    const component = render(<App />);
    expect(component.getByText(/Welcome/)).toBeTruthy();
  });
});
