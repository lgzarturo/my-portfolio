import { useEffect, useState } from "react"
import Character from "./Character"

function List () {
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function fetchData () {
      const data = await fetch('https://rickandmortyapi.com/api/character')
      const { results } = await data.json()
      setCharacters(results)
      setLoading(false)
    }
    fetchData()
  }, [characters.length])

  return (
    <>
      <h2>Characters</h2>
      {loading ?
        (<div>Loading ... </div>) :
        (
          characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              origin={character.origin}
              image={character.image} />
          ))
        )}
    </>
  )
}

export default List
