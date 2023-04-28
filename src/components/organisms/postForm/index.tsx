import React, { FC, useState } from 'react';
import { Paragraph } from '../../atoms/text';
import Input from '../../atoms/input';
import Textarea from '../../atoms/textarea';
import Button from '../../atoms/button';
import { Post } from '../../utils/typings';

interface PostFormProps {
  postTitle?: string;
  postContent?: string;
  id?: number | null;
  isEdit?: boolean;
  onSave: (post: Post) => void;
}

const PostForm: FC<PostFormProps> = ({ postContent = '', postTitle = '', id = null, isEdit = false, onSave }) => {
  const [title, setTitle] = useState(postTitle);
  const [content, setContent] = useState(postContent);

  const createNewPost = (): void => {
    const id = new Date().getTime();
    const post = { title, content, id };
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    onSave(post);
  };

  const editPost = (): void => {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    let index = posts.findIndex((post: { id: number }) => post.id === id);
    if (index != -1) {
      posts[index].title = title;
      posts[index].content = content;
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEdit) {
      editPost();
    } else {
      createNewPost();
    }
    setTitle('');
    setContent('');
  };

  return (
    <div className="w-2/3 my-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-2">
          <Paragraph>Title:</Paragraph>
          <Input value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <Paragraph>Content:</Paragraph>
          <Textarea value={content} onChange={(event) => setContent(event.target.value)} />
        </div>

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default PostForm;
