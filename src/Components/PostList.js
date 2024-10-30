import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/PostSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Упсс! Произошла ошибка: {error}</p>;
  }

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h3 className={"hello"}>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
