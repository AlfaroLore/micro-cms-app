import React, { FC, useState } from 'react';
import { Post } from '../../utils/typings';
import { H3, Paragraph } from '../../atoms/text';
import Button from '../../atoms/button';
import PostForm from '../../organisms/postForm';

interface PostViewProps {
  post: Post;
  updatePost: (post: Post) => void;
}

const PostView: FC<PostViewProps> = ({ post, updatePost }) => {
  const [editView, setEditView] = useState(false);

  return (
    <div>
      {editView ? (
        <div>
          <H3>{post.title}</H3>
          <Paragraph>{post.content}</Paragraph>
          <Button
            onClick={() => {
              setEditView(true);
            }}
          >
            Edit
          </Button>
        </div>
      ) : (
        <PostForm onSave={updatePost} id={post.id} postTitle={post.title} postContent={post.content} isEdit />
      )}
    </div>
  );
};

export default PostView;
