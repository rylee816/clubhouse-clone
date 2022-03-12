import React, { useState } from "react";
import style from "../style/phoneConfirm.module.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function PhoneConfirmation() {
  const [value, setValue] = useState();

  return (
    <div className={style.phoneConfirmContainer}>
      <Link to="/" className={style.backBtn}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Link>
      <h1>Enter Your Phone</h1>
      <PhoneInput international defaultCountry="US" value={value} onChange={setValue}/>
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy.</span> Thanks!
      </p>
      <Link to="/code_confirm" className="primaryBtn d-flex align-items-center">
          Next <FontAwesomeIcon icon={faAngleRight}  />
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
