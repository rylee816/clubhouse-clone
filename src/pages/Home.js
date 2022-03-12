import React, {useState} from 'react'
import style from "../style/welcome.module.css"
import DailyInfoCard from "../components/DailyInfoCard";
import RoomInfoCard from '../components/RoomInfoCard';
import {AiOutlinePlus} from "react-icons/ai";
import {BsGrid3X3Gap} from "react-icons/bs"
import data from "../data/roomCard.json";
import BottomSheet from '../components/BottomSheet';
import cat from "../images/cat.png";
import newRoomData from "../data/newRoom.json";

function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1)

  return (
    <>
    {loaderVisibility ? (
      <div style={{position: "fixed",
      display: "flex",
       top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        alignItems: "center",
         justifyContent: "center",
         zIndex: "1"
         }}>
           <img style={{width: "300px"}} src={cat} alt="cat" />
         </div>
    ) : ("")}
    <div className={style.WelcomeContainer}>
    <h1>Topics</h1>
      <DailyInfoCard />
    <h1 className='mb-3'>Room Info</h1>
      <RoomInfoCard />
    </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className='mr-2' />
          Start a Room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <BottomSheet sheetTitle="start room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={data.find(item => item.id === cardId)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true)
          setTimeout(() => {
            setSheetCreateRoom(item)
            setLoaderVisibility(false)
          }, 1000)
        }}
      />
      <BottomSheet 
        sheetTitle="new room"
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        cardDetail={newRoomData}
        setItemsVisible={(item) => setItemsVisible(item)}
      />
    </>
  )
}

export default Home