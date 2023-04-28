import React, { FC } from 'react';
import Navbar from '../../organisms/navbar';
import { H2 } from '../../atoms/text';
import ContactForm from '../../organisms/contactForm';

const Contact: FC = () => {
  return (
    <div className="lg:px-48 md:px-24 sm:px-12">
      <Navbar />
      <H2>Contact</H2>
      <ContactForm />
    </div>
  );
};

export default Contact;
