import React from 'react'
import './toggle.css'

const Toggle = ({name}) => {
  return (
    <div className='toogle'>
        <label className='switch'>
            <input type="checkbox" />
            <span className='slider'></span>
        </label>
        <span className='lastp'>{name}</span>
    </div>
  )
}

export default Toggle