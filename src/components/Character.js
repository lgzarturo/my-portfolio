function Character (character) {
  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p>{`Origin: ${character.origin && character.origin.name}`}</p>
    </>
  )
}

export default Character
