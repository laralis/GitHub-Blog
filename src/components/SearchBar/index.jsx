import "./styles.css";
import { Publications } from "../../components/Publications";
import { useEffect, useState } from "react";
export function SearchBar({ issues }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults(issues);
  }, []);
  function handleSearch(e) {
    const issuesResults = [];
    const search = e.target.value.toLowerCase();
    issues.map((issue) => {
      if (issue.title.toLowerCase().includes(search)) {
        issuesResults.push(issue);
        setResults(issuesResults);
      }
    });
  }
  return (
    <div className="userPublications">
      <form action="">
        <div className="publications">
          <h2>Publicações</h2>
          <span>
            {results.length == 0 ? issues.length : results.length} publicações
          </span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearch}
        />
      </form>
      <Publications results={results} issues={issues} />
    </div>
  );
}
