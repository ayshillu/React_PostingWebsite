import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(location.state?.post || null);
  const [loading, setLoading] = useState(!location.state?.post);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state?.post) return; // Already have the post
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, location.state]);

  if (loading) return <div>Loading post details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>No post found.</div>;

  return (
    <div className="post-details">
      <Link to="/" className="back-link">&larr; Back to Posts</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="post-meta">Post ID: {post.id}</div>
    </div>
  );
};

export default PostDetails;
