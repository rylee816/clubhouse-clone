import React, {useState} from 'react'
import style from "../../style/bottomSheet.module.css"
import {FcGlobe} from "react-icons/fc";

function StartRoom(props) {
    const [room, setRoom] = useState("open")
  return (
      <>
    <div className={style.switch_Line}></div>
    <div className="text-right">
        <button className={style.addTopicBtn}>
            + Add a topic
        </button>
    </div>
    <div className={style.selectRoom}>
        <button onClick={() =>setRoom("open")} className={room === "open" ? style.active : ""}>
            <div>
                <FcGlobe />
            </div>
            Open
        </button>

        <button onClick={() => setRoom("social")} className={room === "social" ? style.active : ""}>
            <div>
                <FcGlobe />
            </div>
            Social
        </button>

        <button onClick={() => setRoom("closed")} className={room === "closed" ? style.active : ""}>
            <div>
                <FcGlobe />
            </div>
            Closed
        </button>
    </div>
    <p>Start a room <span>
        {room === "closed" ? "for people I choose" : room === "social" ? "with people I follow" : "open to everyone" }
    </span>
    </p>
    <div className='text-center'>
        <button onClick={() => {
        props.setSheetCreateRoom(true)
        props.setSheetVisible(true)
        }} 
        className={style.letGoBtn}>🎉 Let's Go!</button>
    </div>
      </>
  )
}

export default StartRoom