import './Character.css'

function Character (character) {
  return (
    <div className='col-md-3 col-sm-6'>
      <div className="card h-100">
        <img className='card-img-top' src={character.image} alt={character.name} />
        <div className="card-body">
          <h3 className='card-title'>{character.name}</h3>
          <p>{`Origen: ${character.origin && character.origin.name}`}</p>
        </div>
      </div>
    </div>
  )
}

export default Character
