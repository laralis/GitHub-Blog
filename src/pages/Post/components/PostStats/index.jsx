import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faAngleLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
export function PostStats({ title, data, comments, url,user } = props) {

  return (
    <div className="postStatsContainer">
      <header>
        <Link to={"/"} className="backHome">
          <FontAwesomeIcon icon={faAngleLeft} className="iconBack" />
          Voltar
        </Link>
        <a href={url} target="_blank" className="goGit">
          Ver no github
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="iconGit"
          />
        </a>
      </header>
      <h2>{title}</h2>
      <div className="stats">
        <span>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          {user}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} className="icon" />
          {formatDistanceToNow(new Date(data), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} className="icon" />
          {comments} comentários
        </span>
      </div>
    </div>
  );
}
