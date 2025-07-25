import React, { useState } from 'react';
import './FavoriteButton.css';

const FavoriteButton = ({ productId, isFavorite = false, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onToggle(productId, !isFavorite);
    
    // Remove animation class after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`favorite-button ${isAnimating ? 'favorited' : ''}`}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <img
        src="assets/icons/star2.png"
        alt="Favorite"
        className={`favorite-icon ${isFavorite ? 'filled' : ''}`}
      />
    </button>
  );
};

export default FavoriteButton;