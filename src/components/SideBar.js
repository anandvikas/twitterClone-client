import React from 'react'
import WhatsHappening from './WhatsHappening'
import "../css/sideBar.css"
import WhoToFollow from './WhoToFollow'

const SideBar = () => {
  return (
    <div className='side-bar'>
      <WhatsHappening />
      <WhoToFollow />
    </div>
  )
}

export default SideBar