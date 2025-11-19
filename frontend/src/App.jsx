import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const res = await fetch(
        `http://localhost:5000/api/search?q=${encodeURIComponent(query)}`
      );

      if (!res.ok) throw new Error("Could not fetch results");

      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      setError("Failed to fetch results. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="glass search-container">
        <h1 className="title">🔍 Case Law Search</h1>
        <p className="subtitle">Search judgments by keyword (bail, FIR, custody…)</p>

        <form onSubmit={handleSearch} className="search-box">
          <input
            type="text"
            placeholder="Enter keyword like bail,FIR,...."
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={`glow-btn${loading ? " loading" : ""}`} disabled={loading}>
            {loading ? (
              <span>
                <span className="btn-spinner"></span> Searching…
              </span>
            ) : (
              "Search"
            )}
          </button>
        </form>

        {loading && (
          <div className="loading-wrapper">
            <div className="spinner"></div>
            <p>Fetching results…</p>
          </div>
        )}

        {error && <p className="error">{error}</p>}

        {!loading && results.length === 0 && query.trim() !== "" && (
          <p className="no-results">No cases found for “{query}”.</p>
        )}

        <div className="results-section">
          {results.map((r) => (
            <div key={r.id} className="result-card glass">
              <h3>{r.title}</h3>
              <p className="citation">{r.citation}</p>
              <p className="snippet">{r.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
