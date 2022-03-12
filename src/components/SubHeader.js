import React from 'react'
import style from "../style/explore.module.css"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function SubHeader(props) {
  return (
    <div className={style.head}>
        <Link to="/home">
        <FontAwesomeIcon icon={faAngleLeft}/>
        </Link>
        <h3>{props.pageTitle}</h3>
    </div>
  )
}

export default SubHeader