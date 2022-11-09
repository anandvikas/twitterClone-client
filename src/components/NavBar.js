import React, { useEffect, useRef } from 'react'
import "../css/navBar.css"

const NavBar = () => {
    const navRef = useRef(null)
    useEffect(() => {
        console.log(navRef.current.style)
    }, [])
    return (
        <div ref={navRef} className='nav-bar'>
            <div >
                <div className='nav-items'>
                    <div className='nav-item nav-logo'>
                        <img src='./assets/twitter.png' />
                    </div>
                    <div className='nav-item'>
                        <img src='./assets/home.png' />
                        Home
                    </div>
                    <div className='nav-item'>
                        <img src='./assets/hash.png' />
                        Explore
                    </div>
                    <div className='nav-item'>
                        <img src='./assets/bell.png' />
                        Notification
                    </div>
                    <div className='nav-item'>
                        <img src='./assets/message.png' />
                        Message
                    </div>
                    <div className='nav-item'>
                        <img src='./assets/profile.png' />
                        Bookmarks
                    </div>
                    <div className='nav-item'>
                        <img src='./assets/message.png' />
                        Lists
                    </div>
                    <div className='nav-item'>
                        <img src='./assets/profile.png' />
                        Profile
                    </div>
                    <div className='nav-item'>
                        <img src='./assets/more.png' />
                        More
                    </div>
                </div>
                {/* <div className='nav-items'>
                    <div>VIKAS</div>
                </div> */}
            </div>

        </div>
    )
}

export default NavBar