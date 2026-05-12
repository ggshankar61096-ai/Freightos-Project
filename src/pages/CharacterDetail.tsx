import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchCharacterById } from "@/services/api";
import { Character } from "@/types";
import MainLayout from "@/layouts/MainLayout";

//Character Detail Page

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCharacter = async () => {
      if (!id) {
        setError("No character ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await fetchCharacterById(id);
        setCharacter(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load character";
        console.error("Error loading character:", err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadCharacter();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-96">
          <div className="space-y-4">
            <div className="h-12 bg-gray-600 rounded animate-pulse w-80" />
            <div className="h-8 bg-gray-600 rounded animate-pulse w-96" />
            <div className="h-6 bg-gray-600 rounded animate-pulse w-full" />
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error || !character) {
    return (
      <MainLayout>
        <div className="space-y-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
          >
            ← Back to Characters
          </Link>

          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded">
            <p className="font-bold text-lg">Error</p>
            <p className="text-sm">{error || "Character not found"}</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  const statusColor =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
        ? "bg-red-500"
        : "bg-purple-500";

  const statusTextColor =
    character.status === "Alive"
      ? "text-green-500"
      : character.status === "Dead"
        ? "text-red-500"
        : "text-purple-500";

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          ← Back to Characters
        </Link>

        {/* Character Detail Card */}
        <div>
          {/* Image Section */}
          <div className="col-span-1 flex items-center justify-center ">
            <img
              src={character.image}
              alt={character.name}
              className=" w-64 h-64 rounded-full border-4 border-gray-400 object-cover "
            />
          </div>

          {/* Details Section */}
          <div className="md:col-span-2 p-3 md:p-2 flex flex-col justify-center">
            <div className="space-y-3">
              {/* Name */}
              <div>
                <h1 className="text-4xl font-bold text-white mb-0 py-3">
                  {character.name}
                </h1>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className={`inline-block w-3 h-3 rounded-full ${statusColor}`} />
                  <span className={`text-lg font-semibold ${statusTextColor}`}>
                    {character.status}
                  </span>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-gray-600">
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-1">
                    Species
                  </p>
                  <p className="text-white text-lg">{character.species}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-1">
                    Type
                  </p>
                  <p className="text-white text-lg">
                    {character.type || "Unknown"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-1">
                    Gender
                  </p>
                  <p className="text-white text-lg">{character.gender}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-1">
                    ID
                  </p>
                  <p className="text-white text-lg">#{character.id}</p>
                </div>
              </div>

              {/* Location & Origin */}
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-2">
                    Last Known Location
                  </p>
                  <p className="text-white text-base bg-gray-600 p-3 rounded">
                    {character.location?.name}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-2">
                    First Seen In
                  </p>
                  <p className="text-white text-base bg-gray-600 p-3 rounded">
                    {character.origin?.name}
                  </p>
                </div>
              </div>

              {/* Created Date */}
              {character.created && (
                <div className="pt-4 border-t border-gray-600">
                  <p className="text-gray-400 text-xs">
                    Created: {new Date(character.created).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* URL Info */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-gray-400 text-sm font-semibold mb-3">
              Character URL
            </p>
            <a
              href={character.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 break-all text-sm transition-colors"
            >
              {character.url}
            </a>
          </div>

          {/* Episodes Count */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-gray-400 text-sm font-semibold mb-3">
              About This Character
            </p>
            <p className="text-white text-sm leading-relaxed">
              {character.status === "Alive"
                ? "Currently active in the series."
                : character.status === "Dead"
                  ? "No longer among the living."
                  : "Status unknown."}
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
