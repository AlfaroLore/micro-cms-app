import React, { createContext, useEffect, useState } from 'react';
import { Post } from './typings';

interface PostsContextValue {
  posts: Post[];
  addPost: (post: Post) => void;
}

const PostsContext = createContext<PostsContextValue>({
  posts: [],
  addPost: () => {}
});

interface PostsProviderProps {
  children: JSX.Element;
}
const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const addPost = (post: Post) => {
    setPosts([...posts, post]);
  };

  const value: PostsContextValue = {
    posts,
    addPost
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export { PostsContext, PostsProvider };
