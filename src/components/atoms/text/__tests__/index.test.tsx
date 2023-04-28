import { render } from '@testing-library/react';
import { H1, H2, H3, H4, Paragraph, Small } from '..';

describe('Text', () => {
  it('renders h1 heading', () => {
    const component = render(<H1>H1 Heading</H1>);

    expect(component.asFragment()).toMatchSnapshot();

    expect(component).toBeTruthy();
  });

  it('renders h2 heading', () => {
    const component = render(<H2>H2 Heading</H2>);

    expect(component.asFragment()).toMatchSnapshot();

    expect(component).toBeTruthy();
  });

  it('renders h3 heading', () => {
    const component = render(<H3>H3 Heading</H3>);

    expect(component.asFragment()).toMatchSnapshot();

    expect(component).toBeTruthy();
  });

  it('renders h4 heading', () => {
    const component = render(<H4>H1 Heading</H4>);

    expect(component.asFragment()).toMatchSnapshot();

    expect(component).toBeTruthy();
  });

  it('renders paragraph', () => {
    const component = render(
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam at dolor doloremque earum eius et eum
        excepturi facere fugiat illum magnam maiores molestias mollitia, necessitatibus officia quam ratione velit!
      </Paragraph>
    );

    expect(component.asFragment()).toMatchSnapshot();

    expect(component).toBeTruthy();
  });

  it('renders small text', () => {
    const component = render(
      <Small>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda porro quas vero. Amet asperiores cum debitis
        eius et eveniet facere fuga maxime nostrum, officiis perferendis rem vel voluptatem, voluptatibus voluptatum!
      </Small>
    );

    expect(component.asFragment()).toMatchSnapshot();

    expect(component).toBeTruthy();
  });
});
