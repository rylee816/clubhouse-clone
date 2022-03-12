import React from 'react'
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {BsAt, BsUpload, BsPlus} from "react-icons/bs";
import {AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
import randy from "../images/randy.jpeg"

function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
         <div className={`${exploreStyle.head} text-right mb-0`} >
              <Link to="/home">
                <FontAwesomeIcon icon={faAngleLeft}/>
              </Link>
              <div className={style.profileActionBtn}>
                  <BsAt />
                  <BsUpload />
                  <AiOutlineSetting />
              </div>
         </div> 
        </div>
        <div className={style.profile}>
          <img className={style.profileImg} src={randy} alt="" />
          <h4>Randy Riley</h4>
          <p>@SirBizzle_VSP</p>
          <div className={style.follow}>
            <p>
              <span>572</span> followers
            </p>
            <p>
                <span>51</span> following
              </p>
          </div>
          <button className={style.bioBtn}>Add a bio</button>
          <div className="mb-4">
          <button className='mb-0'>
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className='mb-0'>
            <AiOutlineInstagram /> Add Instagram
          </button>
          </div>
          <div className={style.nominated}>
            <img className={style.nominatedImg} src={randy} alt="" />
            <div>
              <p>Joined 14th July 2020</p>
              <p>
              Nominated by <span>John Corcoran</span>
              </p>
            </div>
          </div>
          <p>Member of</p>
          <button className={style.addMemberBtn}>
            <BsPlus />
          </button>
        </div>
      </div>
    </>
  )
}

export default Profile