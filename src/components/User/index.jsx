import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export function User() {
  const userImg = "https://www.github.com/josepholiveira.png";


  return (
    <div className="userCard">
      <img src={userImg} alt="Foto de perfil" className="userPhoto" />
      <div className="userDescription">
        <div className="headerDescription">
          <h2>Joseph Oliveira</h2>
          <a href="https://www.github.com/josepholiveira" target="_blank">
            github
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="iconGit"
            />
          </a>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ab
          voluptas delectus officia recusandae, cum iste dolore repellendus nisi
          in nemo ea.
        </p>
        <div className="userStats">
          <span>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            josepholiveira
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} className="icon" />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} className="icon" />
            32 seguidores
          </span>
        </div>
      </div>
    </div>
  );
}
