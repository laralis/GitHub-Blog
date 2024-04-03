import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import "./styles.css";
export function Publications() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function getApi() {
      const url = await fetch(
        "https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues"
      );
      const response = await url.json();

      setIssues(response);
    }
    getApi();
  }, []);
  return (
    <div className="listPublications">
      {issues.map((issue) => {
        return (
          <Card
            key={issue.id}
            title={issue.title}
            body={issue.body}
            data={issue.updated_at}
          />
        );
      })}
    </div>
  );
}
