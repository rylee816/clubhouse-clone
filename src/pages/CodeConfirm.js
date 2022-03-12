import React from 'react'
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


function CodeConfirm() {
  return (
    <div className={style.phoneConfirmContainer}>
        <div className="text-center">
        <Link to="/get_username" className={style.backBtn}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Link>
            <h1 style={{width: "100%", maxWidth: "200px", marginBottom: "1em"}}>Enter the code we just texted you</h1>
            <input type="text" style={{
                width: "100%",
                border: "none",
                textAlign: "center",
                outline: "none"
                }} />
            <p className='mt-2'>Didn't receive it? <span>Tap to resend.</span></p>
        </div>
        <Link to="/allow_notification" className="primaryBtn d-flex align-items-center">
          Next <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </div>
  )
}

export default CodeConfirm