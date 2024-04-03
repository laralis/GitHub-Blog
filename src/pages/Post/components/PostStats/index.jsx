import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faAngleLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
export function PostStats() {
  return (
    <div className="postStatsContainer">
      <header>
        <Link to={"/"}  className="backHome">
          <FontAwesomeIcon icon={faAngleLeft} className="iconBack" />
          Voltar
        </Link>
        <a href="" target="_blank" className="goGit">
          Ver no github
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="iconGit"
          />
        </a>
      </header>
      <h2>JavaScript data types and data structures</h2>
      <div className="stats">
        <span>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          cameronwll
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} className="icon" />
          Há 1 dia
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} className="icon" />5 comentários
        </span>
      </div>
    </div>
  );
}
