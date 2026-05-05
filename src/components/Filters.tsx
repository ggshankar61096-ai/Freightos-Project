import { useState, useEffect } from "react";

interface Props {
  status: string;
  setStatus: (value: string) => void;
  setName: (value: string) => void;
}

function Filters({ status, setStatus, setName }: Props) {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setName(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input, setName]);

  return (
    <div className="filters">
      {/* Search */}
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search characters..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* Dropdown */}
      <div className="select-box">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;