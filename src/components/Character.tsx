import { Character as CharacterType } from "../types";

interface Props {
  character: CharacterType;
}

function Character({ character }: Props) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />

      <div className="card-content">
        <h2>{character.name}</h2>

        <p className="status">
          <span className={character.status === "Alive" ? "dot alive" : "dot dead"}></span>
          {character.status} - {character.species}
        </p>

        <p className="label">Last known location:</p>
        <p>{character.location?.name}</p>

        <p className="label">First seen in:</p>
        <p>{character.origin?.name}</p>
      </div>
    </div>
  );
}

export default Character;