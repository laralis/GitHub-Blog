import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

export function User() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(
      "https://api.github.com/users/josepholiveira"
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
  });
  return (
    <div className="userCard">
      <img src={user.avatar_url} alt="Foto de perfil" className="userPhoto" />
      <div className="userDescription">
        <div className="headerDescription">
          <h2>{user.name}</h2>
          <a href={user.html_url} target="_blank">
            github
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="iconGit"
            />
          </a>
        </div>
        <p>{user.bio}</p>
        <div className="userStats">
          <span>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            {user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} className="icon" />
            {user.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} className="icon" />
            {user.followers} seguidores
          </span>
        </div>
      </div>
    </div>
  );
}
