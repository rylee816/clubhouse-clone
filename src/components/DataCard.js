import React from "react";
import style from "../style/dailyInfoCard.module.css"

function DataCard({ time, title, description }) {
  return (
    <div className={style.DataCard}>
    <div className={style.Data_title}>
      <span>{time}</span>
      <p>{title}</p>
    </div>
      <div className={style.Data_description}>
      <p>{description}</p>
      </div>
    </div>
  );
}

export default DataCard;
