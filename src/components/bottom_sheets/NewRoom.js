import React, {useState} from 'react'
import "../../style/roomDetail.module.css";
import {AiOutlineFile, AiOutlinePlus} from "react-icons/ai";
import {BsMicMuteFill, BsMicFill} from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
 import {FaHandPeace} from "react-icons/fa";
 import {FaRegHandPaper} from "react-icons/fa"
import style from "../../style/roomDetail.module.css";
import randy from "../../images/randy.jpeg"

function NewRoom(props) {
const [micMuteVisible, setMicMuteVisible] = useState(false);
const [itemsVisible, setItemsVisible] = useState(true)

const card = props.cardDetail;


  return (
    <>
        <div className={style.roomDetailContainer}>
            <div className={style.head}>
                <div className="display-flex align-items-center">
                    <a href="#" onClick={() => {props.setSheetVisible(false)}}>
                        <FontAwesomeIcon className={style.arrow_icon} icon={faAngleLeft}/>
                    </a>
                    <span>Hallway</span>
                </div>
                <div>
                    <AiOutlineFile />
                    <img className={style.profile_img} src={randy} alt="profile img" />
                </div>
            </div>
            <div className={style.roomDetailCard}>
                <div className="d-flex align-items-center justify-content-between flex-wrap"
                style={{padding: "0.5em"}}>
                    {card.members.map(member => {
                          return <div className={style.memberContainer}>
                          {micMuteVisible ? (
                              <div className={style.audio_icon}>
                                  <BsMicMuteFill />
                              </div>
                          ) : ("")}
                          <img src={randy} alt="user img" />
                          <p>
                              <span>*</span>
                              {member.first_name}
                          </p>
                          </div>
                        })}
                </div>
            </div>
            <div className={style.footer}>
                <button onClick={() => props.setSheetVisible(false)}>
                    <FaHandPeace /> Leave Quietly
                </button>
                <div>
                    <button>
                        <AiOutlinePlus />
                    </button>
                    <button>
                        <FaRegHandPaper />
                    </button>
                    <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                        {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill />}
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewRoom