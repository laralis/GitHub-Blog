import { Card } from "./components/Card";
import "./styles.css";
export function Publications({ results, issues }) {
  return (
    <div className="listPublications">
      {results.length == 0
        ? issues.map((issues) => {
            return (
              <Card
                key={issues.id}
                title={issues.title}
                body={issues.body}
                data={issues.updated_at}
                comments={issues.comments}
                url={issues.html_url}
                user={issues.user.login}
              />
            );
          })
        : results.map((result) => {
            return (
              <Card
                key={result.id}
                title={result.title}
                body={result.body}
                data={result.updated_at}
                comments={result.comments}
                url={result.html_url}
                user={result.user.login}
              />
            );
          })}
    </div>
  );
}
