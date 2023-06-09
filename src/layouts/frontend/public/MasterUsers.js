import React from 'react'
import { Outlet } from "react-router-dom";
import NavbarUser from '../public/NavbarUser';
import "../public/Style/Frontend.css"
import ThemisAdmin from '../../admin/Extensions/ThemisAdmin';


const MasterUsers = () => {

  return (
    <>
      <div className="wrapper">
        <NavbarUser />
        <div className='content-user container'>
          <div className='row w-100'>
         
            <div className='col-lg-12'>
              <Outlet />
            </div>

          </div>

        </div>

        <ThemisAdmin />

      </div>

    </>
  )
}

export default MasterUsers