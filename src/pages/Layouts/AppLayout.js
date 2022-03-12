import React from 'react'
import {Outlet} from "react-router-dom";
import Header from '../../components/Header';

function AppLayout({children}) {
  return (
    <div className='app_layout' style={{width: "100%", maxWidth: "500px", margin:"auto", height: "100%"}}>
    <Header />
        <Outlet />
    </div>
  )
}

export default AppLayout