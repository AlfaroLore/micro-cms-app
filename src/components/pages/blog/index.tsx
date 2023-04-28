import React, { FC, useContext } from 'react';
import Navbar from '../../organisms/navbar';
import { H2 } from '../../atoms/text';
import PostForm from '../../organisms/postForm';
import PostList from '../../organisms/postsList';
import { PostsContext } from '../../utils/postsContext';

const Blog: FC = () => {
  const { posts, addPost } = useContext(PostsContext);
  return (
    <div className="lg:px-48 md:px-24 sm:px-12">
      <Navbar />
      <H2>Blog</H2>
      <PostForm onSave={addPost} />
      <PostList list={posts} />
    </div>
  );
};

export default Blog;
