import React, { FC } from 'react';
import PostCard from '../../molecules/postCard';
import { H2 } from '../../atoms/text';

interface PostsListProps {
  list: { id: number; title: string; content: string }[];
}

const PostList: FC<PostsListProps> = ({ list }) => {
  return (
    <>
      <H2 className="my-2">Latest Posts!</H2>
      <div className="grid grid-cols-4 gap-4">
        {list.map((post) => (
          <PostCard key={`post-card-${post.id}`} title={post.title} content={post.content} id={post.id + ''} />
        ))}
      </div>
    </>
  );
};

export default PostList;
