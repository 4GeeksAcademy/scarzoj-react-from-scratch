import { useEffect, useState } from "react"
import { isEmpty } from "lodash"
import { useParams } from "react-router"

export const CharacterPage = () => {
    const [character, setCharacter] = useState({})

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then((data) => data.json())
            .then((jsonData) => setCharacter(jsonData.result.properties))
    }, [id])

    return (
        <div>
            {!isEmpty(character) && (
                <h1>
                    {character.name}
                </h1>
            )}
        </div>
    )
}