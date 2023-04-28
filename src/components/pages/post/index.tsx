import React, { FC, useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../utils/postsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Post } from '../../utils/typings';
import PostView from '../../molecules/postView';

const SinglePost: FC = ({}) => {
  const { postId } = useParams();
  const { posts, updatePost } = useContext(PostsContext);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    const index = posts.findIndex((post: { id: number }) => post.id.toString() == postId);
    if (index !== -1) {
      setCurrentPost(posts[index]);
    }
  }, [postId]);

  return (
    <div>
      <button onClick={goBack} className="text-white mb-4">
        Go Back
      </button>
      {currentPost ? (
        <PostView post={currentPost} updatePost={updatePost} />
      ) : (
        'The post you are looking for was not found'
      )}
    </div>
  );
};

export default SinglePost;
