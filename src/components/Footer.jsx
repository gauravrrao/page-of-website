import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import './footer.css'




const Footer = () => {
  return (
    <div className='footer'>
        <MenuIcon style={{color:"white"}}/>
        <div className="subf">
    <EmailIcon style={{color:"white"}}/><span className='kk'>MAILS</span>
        <AccessAlarmIcon style={{color:"white"}}/><span className='kk'>AlARAMS</span>
            <MovieCreationIcon style={{color:"white"}}/><span className='kk'>MOVIES</span>
        </div>
        <MenuIcon style={{color:"white"}}/>
    </div>
  )
}

export default Footer