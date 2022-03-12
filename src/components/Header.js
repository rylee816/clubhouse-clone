import React from "react";
import { Link } from "react-router-dom";
import style from "../style/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendar,
  faUserPlus,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={style.Header}>
      <Link to="/home/explore">
        <FontAwesomeIcon
          className={style.HeaderIcon}
          icon={faMagnifyingGlass}
        />
      </Link>

      <div className={style.nav_items}>
        <Link to="/friends_invite">
          <FontAwesomeIcon className={style.HeaderIcon} icon={faUserPlus} />
        </Link>
        <Link to="/calendar">
          <FontAwesomeIcon className={style.HeaderIcon} icon={faCalendar} />
        </Link>
        <Link to="/notifications">
          <FontAwesomeIcon className={style.HeaderIcon} icon={faBell} />
        </Link>
        <Link to="/home/profile">
        <div className={style.img_container} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
