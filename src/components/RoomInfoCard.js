import React, {useState, useEffect} from 'react'
import style from "../style/roomCard.module.css"
import data from "../data/roomCard.json"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCommentDots as solid, faUser} from "@fortawesome/free-solid-svg-icons"
import {faCommentDots} from "@fortawesome/free-regular-svg-icons"
import randy from "../images/randy.jpeg"


function RoomInfoCard() {    

  return (
    <>
        {data.map(item => (
            <div>
                <div>
                    <div className={style.RoomCardContainer}>
                            <h6>{item.title}</h6>
                            <h2>{item.sub_title}</h2>
                            <div className={style.RoomMembers}>
                                <div className={style.RoomImages}>
                                    <img className={style.room_image1} src={randy} alt="" />
                                    <img className={style.room_image2} src={randy} alt="" />
                                </div>
                            </div>
                            <div className={style.RoomMembers}>
                                {item.members.map(member => (
                                    <p>{member.first_name} {member.last_name} <FontAwesomeIcon icon={faCommentDots}/></p>
                                ))}
                                <p className="d-flex align-items-center gap-2">
                                    <span className="mr-5">1.8</span>
                                    <FontAwesomeIcon icon={faUser}/>
                                    <span className="mx-2"></span>{" "}
                                    <span className="mr-2">5</span><FontAwesomeIcon icon={solid}/>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default RoomInfoCard