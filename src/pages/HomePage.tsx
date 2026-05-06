import { useEffect, useState } from "react";
import { fetchCharacters } from "@/services/api";
import { Character } from "@/types";

import MainLayout from "@/layouts/MainLayout";
import CharacterList from "@/components/CharacterList";
import Pagination from "@/components/Pagination";
import Filters from "@/components/Filters";
import Loader from "@/components/Loader";
import ErrorAlert from "@/components/ErrorAlert";
import EmptyState from "@/components/EmptyState";

/**
 * Home Page - Lists all characters with filters and pagination
 */
export default function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCharacters({ page, name, status });
      setCharacters(data.results);
      setInfo(data.info);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load characters";
      console.error("Error loading characters:", err);
      setError(errorMessage);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, [page, name, status]);

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Filters Section */}
        <Filters status={status} setStatus={setStatus} setName={setName} />

        {/* Error Message */}
        <ErrorAlert error={error} onClose={() => setError(null)} />

        {/* Content Section */}
        {loading ? (
          <Loader />
        ) : characters.length > 0 ? (
          <CharacterList data={characters} />
        ) : (
          <EmptyState message="No characters found. Try adjusting your filters." />
        )}

        {/* Pagination */}
        {!loading && characters.length > 0 && (
          <Pagination info={info} page={page} setPage={setPage} />
        )}
      </div>
    </MainLayout>
  );
}
