import React from 'react';
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPointUp} from "@fortawesome/free-solid-svg-icons";

function AllowNotification() {
  return (
    <div className={style.phoneConfirmContainer}>
        <div className="text-center">
            <h1 className='mb-4'>Last, important step!</h1>
            <h1 className='mb-3'>Enable notifications to know when people are talking</h1>
            <div className={style.notificationContainer}>
                <div className="p-3">
                    <h3>Clubhouse Would Like to Send You Notifications</h3>
                    <p className='m-auto'>Notifications may include alerts, sounds, and icon badges</p>
                </div>
                <div className={style.actionBtn}>
                    <Link to="/">
                        Don't Allow
                    </Link>
                    <Link to="/home">
                         Allow
                    </Link>
                </div>
                    <FontAwesomeIcon className={style.hand_icon} icon={faHandPointUp}/>
            </div>
        </div>
    </div>
  )
}

export default AllowNotification