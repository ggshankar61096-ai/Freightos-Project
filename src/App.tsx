import { useEffect, useState } from "react";
import { fetchCharacters } from "./services/api";
import { Character } from "./types";

import CharacterList from "./components/CharacterList";
import Pagination from "./components/pagination";
import Filters from "./components/filters";
import Loader from "./components/Loader";


function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      const data = await fetchCharacters({ page, name, status });
      setCharacters(data.results);
      setInfo(data.info);
    } catch (err) {
      console.error(err);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, [page, name, status]);

  return (
    <div>
      <h1>Rick & Morty Characters</h1>

        <Filters
        status={status}
        setStatus={setStatus}
        setName={setName}
        />

      {loading ? <div className="body-inner"><Loader /> </div> : <div className="body-inner"><CharacterList data={characters} /></div>}

      <Pagination info={info} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
