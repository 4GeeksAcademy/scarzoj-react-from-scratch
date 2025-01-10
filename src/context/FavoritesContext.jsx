import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: (id, name, type) => { },
    deleteFavorite: (id, type) => { }
});

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    const addFavorite = (id, name, type) => {
        setFavorites([
            ...favorites,
            {
                id: id,
                name: name,
                type: type,
            }
        ])
    }

    const deleteFavorite = (id, type) => {
        setFavorites(
          favorites.filter((favorite) => {
            return !(favorite.id === id && favorite.type === type);
          }),
        );
      };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, deleteFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
} 