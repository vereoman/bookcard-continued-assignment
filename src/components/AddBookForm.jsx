import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBookForm.css';

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    coverImage: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Book added successfully! (simulated)');
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </div>
        
        // ... similar input fields for author, description, and coverImage ...

        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Add Book
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm; 