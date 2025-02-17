// src/components/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="header-section">
        <h1>Book Library</h1>
        <button 
          className="add-button"
          onClick={() => navigate('/add-book')}
        >
          Add New Book
        </button>
      </div>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
