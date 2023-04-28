import React, { createContext, useEffect, useState } from 'react';
import { Post } from './typings';

interface PostsContextValue {
  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
}

const PostsContext = createContext<PostsContextValue>({
  posts: [],
  addPost: () => {},
  updatePost: () => {}
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
    localStorage.setItem('posts', JSON.stringify([...posts, post]));
  };

  const updatePost = (post: Post) => {
    const { id, title, content } = post;
    const updatedPosts = posts.map((editingPost) =>
      editingPost.id === id ? { ...editingPost, title, content } : editingPost
    );
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const value: PostsContextValue = {
    posts,
    addPost,
    updatePost
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export { PostsContext, PostsProvider };
