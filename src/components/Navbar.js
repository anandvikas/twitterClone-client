import React, { useEffect, useState } from 'react'

// import Notification from "../images/notification.svg"

const Navbar = ({ socket }) => {

    const [notifications, setNotifications] = useState([])
    const [open, setopen] = useState(false)

    useEffect(() => {
        if (socket) {
            socket.on('getnotification', (data) => {
                setNotifications((prev) => {
                    return [...prev, data]
                })
            })
        }
    }, [socket])

    const displayNotification = ({ senderName, type }) => {
        let action;

        if (type == 1) {
            action = "liked"
        } else if (type == 2) {
            action = 'commented on'
        } else if (type == 3) {
            action = 'shared'
        }

        return (
            <span className='notification'>{senderName} {action} your post.</span>
        )
    }

    const handleOpenClose = () => {
        if (open) {
            setopen(false)
            setNotifications([])
        } else {
            setopen(true)
        }
    }
    return (
        <div className='navbar'>
            <div className='logo'>App</div>
            <div className='icons'>
                <div className='icon'>
                    <div className='iconImg' onClick={handleOpenClose}>Noti</div>
                    <div className='counter'>{notifications.length}</div>
                </div>
                <div className='icon'>
                    <div className='iconImg' >Msg</div>
                    {/* <div className='counter'></div> */}
                </div>
                <div className='icon'>
                    <div className='iconImg' >Stng</div>
                    {/* <div className='counter'></div> */}
                </div>
            </div>
            {
                open &&
                <div className='notifications'>
                    {
                        notifications.map((val, i) => displayNotification(val))
                    }
                </div>
            }

        </div>
    )
}

export default Navbar