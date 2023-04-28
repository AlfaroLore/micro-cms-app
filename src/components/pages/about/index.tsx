import React, { FC } from 'react';
import { H2, Paragraph } from '../../atoms/text';

const About: FC = () => {
  return (
    <div>
      <H2>About Us</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id imperdiet nisi. Nullam mattis tincidunt
        suscipit. Suspendisse iaculis purus in ex tempus dapibus. Suspendisse sit amet congue nulla. Vestibulum
        condimentum nisl at scelerisque accumsan. Praesent mi ante, aliquet vel imperdiet a, elementum a justo. Nunc
        semper scelerisque congue. Vivamus vehicula urna orci, eu euismod orci dignissim vitae. Curabitur ac nibh
        ullamcorper, semper neque ac, aliquet neque. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Vestibulum mollis tellus at tempor vulputate. Integer efficitur, quam ac semper
        porttitor, nisi arcu molestie lectus, ac hendrerit lorem tortor et diam. Mauris sed elementum erat. Nunc dapibus
        finibus neque, quis mattis quam lobortis ac. Nunc eget cursus mi. Praesent lacinia arcu rhoncus sapien
        venenatis, eget consectetur lectus placerat.
      </Paragraph>
    </div>
  );
};

export default About;
