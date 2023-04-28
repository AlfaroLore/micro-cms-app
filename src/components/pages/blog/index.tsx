import React, { FC, useContext } from 'react';
import PostForm from '../../organisms/postForm';
import PostList from '../../organisms/postsList';
import { PostsContext } from '../../utils/postsContext';
import { H2 } from '../../atoms/text';

const Blog: FC = () => {
  const { posts, addPost } = useContext(PostsContext);
  return (
    <div>
      <H2>Blog</H2>
      <PostForm onSave={addPost} />
      <PostList list={posts} />
    </div>
  );
};

export default Blog;
