import React, { FC } from 'react';
import { H3, Paragraph } from '../../atoms/text';
import { Link } from 'react-router-dom';

interface PostCard {
  title: string;
  content: string;
  id: string;
}

const PostCard: FC<PostCard> = ({ title, content, id }) => {
  return (
    <div className="border-2 rounded-lg border-solid border-grey p-4 flex flex-col items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
        className="h-24"
        alt="placeholder image"
      />
      <H3>{title}</H3>
      <Paragraph>{content.length > 60 ? `${content.substring(0, 60)}...` : content}</Paragraph>
      <Link to={`/blog/${id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;
