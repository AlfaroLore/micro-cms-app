import React, { FC } from 'react';
import ContactForm from '../../organisms/contactForm';
import { H2 } from '../../atoms/text';

const Contact: FC = () => {
  return (
    <div>
      <H2>Contact</H2>
      <ContactForm />
    </div>
  );
};

export default Contact;
