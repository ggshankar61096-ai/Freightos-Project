import { Character as CharacterType } from "@/types";
import Character from "./Character";

interface Props {
  data: CharacterType[];
}

// Character List Component

function CharacterList({ data }: Props) {
  if (data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No characters found</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {data.map((char) => (
        <Character key={char.id} character={char} />
      ))}
    </div>
  );
}

export default CharacterList;