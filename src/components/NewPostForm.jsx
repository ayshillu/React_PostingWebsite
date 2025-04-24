import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPostForm.css';

const NewPostForm = ({ onAddPost, onEditPost, initialData, editing }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initialData ? initialData.title : '');
  const [body, setBody] = useState(initialData ? initialData.body : '');
  const [error, setError] = useState('');
  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);

  // If initialData changes (edit mode), update fields and focus title input
  useEffect(() => {
    if (editing && initialData) {
      setTitle(initialData.title);
      setBody(initialData.body);
      setTimeout(() => {
        if (titleInputRef.current) titleInputRef.current.focus();
      }, 0);
    } else if (!editing) {
      setTitle('');
      setBody('');
    }
  }, [editing, initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError('Both fields are required.');
      return;
    }
    if (editing && onEditPost) {
      onEditPost({ ...initialData, title, body });
    } else {
      const newId = Date.now();
      const newPost = {
        id: newId, // Dummy unique id
        title,
        body,
      };
      onAddPost(newPost);
    }
    setTitle('');
    setBody('');
    setError('');
  };


  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <h3>{editing ? 'Edit Post' : 'Add New Post'}</h3>
      {error && <div className="form-error">{error}</div>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
        ref={titleInputRef}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={e => {
          setBody(e.target.value);
          if (bodyInputRef.current) {
            bodyInputRef.current.style.height = '2.5rem';
            bodyInputRef.current.style.height = `${bodyInputRef.current.scrollHeight}px`;
          }
        }}
        className="form-input"
        rows={4}
        ref={bodyInputRef}
      />
      <button type="submit" className="form-btn">{editing ? 'Save Changes' : 'Add Post'}</button>
    </form>
  );
};

export default NewPostForm;
