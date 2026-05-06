import { useState, useEffect } from "react";
import { QUERY_DELAYS } from "@/constants/api";

interface Props {
  status: string;
  setStatus: (value: string) => void;
  setName: (value: string) => void;
}

/**
 * Filters Component
 * Provides search input and status filter dropdown
 */
function Filters({ status, setStatus, setName }: Props) {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setName(input);
    }, QUERY_DELAYS.SEARCH_DEBOUNCE);

    return () => clearTimeout(timer);
  }, [input, setName]);

  return (
    <div className="filters">
      {/* Search Box */}
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search characters by name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Search characters"
        />
      </div>

      {/* Status Filter */}
      <div className="select-box">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          aria-label="Filter by status"
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;