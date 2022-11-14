import './Character.css';

interface CharacterObject {
  id?: string;
  name: string;
  origin: OriginObject;
  image: string;
}

interface OriginObject {
  name: string;
}

function Character(character: CharacterObject) {
  const { name, image, origin } = character;
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card h-100">
        <img className="card-img-top" src={image} alt={name} />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p>{`Origen: ${origin && origin.name}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
