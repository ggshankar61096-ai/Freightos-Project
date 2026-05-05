import { Character as CharacterType } from "../types";
import Character from "./Character";

interface Props {
  data: CharacterType[];
}

function CharacterList({ data }: Props) {
  return (
    <div className="grid">
      {data.map((char) => (
        <Character key={char.id} character={char} />
      ))}
    </div>
  );
}

export default CharacterList;