import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './header.css'

const Header = () => {
  return (
    <>

    <div className="header">
        <div className="leftheader">
            < MenuIcon className='icon'/>
            <img src=".\images\tigeen_computing_logo (2) (1).png" className='image' alt="" />
        </div>
        < MenuIcon className='icon'/>
    </div>


    </>
  )
}

export default Header