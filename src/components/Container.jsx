import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import './container.css'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Toggle from './Toggle';

const Container = () => {
  return (
    <div className='container'>
        <div className="upper-container">
        <EditIcon className='icon2'  style={{ fontSize: 20, background:"blue",borderRadius:50,padding:3,marginLeft:5}}/><hr className='line'/>
        <SettingsIcon className='icon2' style={{ fontSize:20, background:"grey" ,borderRadius:50,padding:3}}/><hr className='line'/>
        <RadioButtonCheckedIcon className='icon2' style={{ fontSize:20, background:"grey",borderRadius:50,padding:3,marginRight:5 }}/>
        </div>
        <div className="uppersecond">
            <p className='intro'>I want a Company Logo</p>
            <div className="sposition">
            <PanoramaFishEyeIcon/>
            <span className='pt'>Left</span>
            <PanoramaFishEyeIcon/>
            <span className='pt'>Right</span>
            <PanoramaFishEyeIcon/>
            <span className='pt'>center</span>
            <PanoramaFishEyeIcon/>
            <span className='pt'>Disable</span>
            </div>
        </div>
        <div className="upperthird">
            <p className='intro2'>Preset Color</p>
            <div className="sposition">
            <PanoramaFishEyeIcon style={{color : "blue"}}/>
            <span className='pt'>Blue</span>
            <PanoramaFishEyeIcon  style={{color : "red"}}/>
            <span className='pt'>Red</span>
            </div>
            <p className='intro'>Preset Apply only: Header Background Button , Radio Button & switch</p>
        </div>
        <div className="upperfourth">
            <Toggle name="I want a Header"/>
            <Toggle name="I want a Footer"/>
            <Toggle name="I want a Drawer Overlay Mode (requires Header or Footer"/>
            <Toggle name="I want a Left-side Drawer"/>
            <Toggle name="I want a right-side Drawer"/>
            <Toggle name="I want navigation tabs (requires Header)"/>
            <Toggle name="I want a Bottom Menu (requires Footer)"/>
        </div>
        <button className='btn'>Continue</button>
    </div>
  )
}

export default Container