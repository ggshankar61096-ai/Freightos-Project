import { Character as CharacterType } from "@/types";

interface Props {
  character: CharacterType;
}

/**
 * Character Card Component
 * Displays individual character information with image and details
 */
function Character({ character }: Props) {
  const statusColor =
    character.status === "Alive" ? "bg-status-alive" : "bg-status-dead";

  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        className="w-[180px] h-[180px] object-cover"
      />

      <div className="card-content">
        <h2 className="text-lg font-bold text-white mb-2">{character.name}</h2>

        <p className="status">
          <span className={`dot ${statusColor}`}></span>
          <span>{character.status}</span>
          <span className="text-gray-400">-</span>
          <span>{character.species}</span>
        </p>

        <div className="mt-4 space-y-2">
          <div>
            <p className="label">Last known location:</p>
            <p className="text-gray-300 text-sm">{character.location?.name}</p>
          </div>

          <div>
            <p className="label">First seen in:</p>
            <p className="text-gray-300 text-sm">{character.origin?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;