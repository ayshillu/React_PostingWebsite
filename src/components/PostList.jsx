import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import './PostList.css';
import './NewPostForm.css';


import { useNavigate } from 'react-router-dom';

const PostList = ({ posts, setPosts, loading, error, onAddPost, onEditPost }) => {
  const [editingPost, setEditingPost] = useState(null);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState('');



  const handleEditClick = (post) => {
    setEditingPost(post);
    setIsEditing(true);
  };

  const handleEditPost = (updatedPost) => {
    onEditPost(updatedPost);
    setEditingPost(null);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setIsEditing(false);
  };


  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="post-list">
      <section className="form-section">
        <h2 style={{textAlign:'center',marginBottom:'1rem'}}>Add or Edit Post</h2>
        <NewPostForm
          onAddPost={onAddPost}
          onEditPost={handleEditPost}
          initialData={editingPost}
          editing={isEditing}
        />
        {isEditing && (
          <button className="form-btn" style={{margin:'0 auto 1rem auto',display:'block'}} onClick={handleCancelEdit} type="button">Cancel Edit</button>
        )}
      </section>
      <div className="posts-section">
        <h2>Posts</h2>
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Search posts by title..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input"
          />
          <span className="search-icon" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="7" stroke="#0a2342" strokeWidth="2"/>
              <line x1="15.4142" y1="15" x2="19" y2="18.5858" stroke="#0a2342" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </div>
        <div className="post-sections">
          {filteredPosts.map((post) => (
            <section key={post.id} className="post-section">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'1rem'}}>
                <Link
                  to={`/posts/${post.id}`}
                  state={{ post }}
                  className="post-link"
                  aria-label={`View details for post: ${post.title}`}
                  style={{flex:1}}
                >
                  <h3>{post.title}</h3>
                  <p>{post.body.substring(0, 100)}{post.body.length > 100 ? '...' : ''}</p>
                </Link>
                {!isEditing && (
                  <button className="form-btn" style={{height:'2.2rem'}} onClick={() => handleEditClick(post)} type="button">Edit</button>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
