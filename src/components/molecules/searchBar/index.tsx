import React, { FC } from 'react';
import { Paragraph } from '../../atoms/text';
import Button from '../../atoms/button';
import Input from '../../atoms/input';

const SearchBar: FC = () => {
  return (
    <div className="p-2 flex flex-col gap-2">
      <Paragraph>Search the Site</Paragraph>
      <div className="flex gap-2">
        <Input />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
