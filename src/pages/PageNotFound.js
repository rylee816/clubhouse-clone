import React from 'react'
import style from "../style/phoneConfirm.module.css"

function PageNotFound() {
  return (
    <div className={style.phoneConfirmContainer}>
    <h1 style={{fontSize: "4em"}}>404</h1>
    <h1 className='text-center mt-5'>The page you are looking for could not be found!</h1>
    </div>
  )
}

export default PageNotFound