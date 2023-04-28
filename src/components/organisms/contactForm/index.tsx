import React, { FC, useState } from 'react';
import { Paragraph } from '../../atoms/text';
import Input from '../../atoms/input';
import Textarea from '../../atoms/textarea';
import Button from '../../atoms/button';

const ContactForm: FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitle('');
    setContent('');
  };

  return (
    <div className="w-2/3 my-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-2">
          <Paragraph>Name:</Paragraph>
          <Input value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <Paragraph>Message:</Paragraph>
          <Textarea value={content} onChange={(event) => setContent(event.target.value)} />
        </div>

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default ContactForm;
