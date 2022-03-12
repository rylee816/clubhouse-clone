import React from 'react';
import {useNavigate} from "react-router-dom";
import style from "../style/dailyInfoCard.module.css"
import data from "../data/dailyCard.json"
import DataCard from './DataCard';

function DailyInfoCard() {
  let navigate = useNavigate()
    
  return (
    <>
    <div className={style.DailyInfoCard}>
     {data.map((el, index) => (
          <DataCard key={index} time={el.time} title={el.title} description={el.description}/>
        ))}
        <div style={{justifyContent:"center"}} className='primaryBtn' onClick={() => navigate("/")}>Back</div>
    </div>
    </>
  )
}

export default DailyInfoCard