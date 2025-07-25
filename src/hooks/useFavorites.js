import { useState, useEffect, useCallback } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
      return [];
    }
  });

  // Save favorites to localStorage whenever favorites state changes
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);

  const toggleFavorite = useCallback((productId) => {
    setFavorites(prevFavorites => {
      const isFavorited = prevFavorites.includes(productId);
      if (isFavorited) {
        return prevFavorites.filter(id => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  }, []);

  const isFavorite = useCallback((productId) => {
    return favorites.includes(productId);
  }, [favorites]);

  const addToFavorites = useCallback((productId) => {
    setFavorites(prevFavorites => {
      if (!prevFavorites.includes(productId)) {
        return [...prevFavorites, productId];
      }
      return prevFavorites;
    });
  }, []);

  const removeFromFavorites = useCallback((productId) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(id => id !== productId)
    );
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
    favoritesCount: favorites.length
  };
};