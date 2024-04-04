import "./styles.css";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";
export function Card({ body, title, data, url, comments, user } = props) {
  return (
    <div className="cardPost">
      <Link
        to={"/post-details"}
        state={{
          title: `${title}`,
          body: `${body}`,
          data: `${data}`,
          comments: `${comments}`,
          url: `${url}`,
          user: `${user}`,
        }}
      >
        <header>
          <h2>{title}</h2>
          <span>
            {formatDistanceToNow(new Date(data), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </header>
        <div className="text">
          <p>{body}</p>
        </div>
      </Link>
    </div>
  );
}
