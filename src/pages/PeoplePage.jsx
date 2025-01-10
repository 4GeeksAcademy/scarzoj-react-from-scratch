import { useContext, useEffect, useState } from "react"

import { Card, Button } from "react-bootstrap"
import { Link } from "react-router"
import { FavoritesContext } from "../context/FavoritesContext"

export const PeoplePage = () => {
    const [people, setPeople] = useState([])

    const { favorites, addFavorite, deleteFavorite } = useContext(FavoritesContext)

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then((data) => data.json())
            .then((jsonData) => setPeople(jsonData.results))
    }, [])

    const isFavorited = (id, type) => {
        return favorites.some((favorite) => {
            return favorite.id === id && favorite.type === type;
        });
    };

    return (
        <div>
            {people.map((character) => {
                return (
                    <h1 key={character.uid}>
                        <Card>
                            {character.name}
                            <Button>
                                <Link to={`/people/${character.uid}`}>Navigate</Link>
                            </Button>
                            <Button
                                onClick={
                                    () => !isFavorited(character.uid, "people")
                                        ? addFavorite(character.uid, character.name, "people")
                                        : deleteFavorite(character.uid, "people")
                                }
                            >{!isFavorited(character.uid, "people") ? "Fav" : "Unfav"}</Button>
                        </Card>
                    </h1>
                )
            })}
        </div>
    )
}