import React, {useState} from 'react'
import style from "../style/welcome.module.css"
import {Link} from "react-router-dom";

function Welcome() {

  return (
    <div className={style.WelcomeContainer}>
        <h1>Welcome!</h1>
        <div className={style.WelcomeInfo}>
            <p>
                We're working hard to get clubhouse ready for everyone! While we wrap up the finishing touches, we will be adding people gradually to ensure that nothing breaks.
            </p>
            <p>
                Anyone can join with an invite from an existing user, or reserve your username and we'll text you if you have a friend on the app who can give you access. We are so grateful you're here and can't wait to have you on board!
            </p>
            <h5>Paul, Rohan & the Clubhouse Team</h5>
        </div>
        <div className={style.actionBtn}>
            <Link to="/get_username" className='primaryBtn d-flex align-items-center mb-3'>Get Your Username {" "}
            {/* <img src="" alt="" /> */}
            </Link>
            <Link to="/invite">
                Have an invite text? Sign in
            </Link>
        </div>
    </div>
  )
}

export default Welcome;