import React, { useState } from 'react'

const Card = ({ post, socket, user }) => {
    const [liked, setLiked] = useState(false)

    const handleNotification = (type) => {
        setLiked(true)
        socket.emit('sendNotification', {
            senderName: user,
            receiverName: post.username,
            type
        })
    }

    return (
        <div className='card'>
            <div className='info'>
                <img src={post.userImg} alt="" className='userImg' />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} alt="" className='postImg' />
            <div className='interaction'>
                {
                    liked ? <span className='cardIcon'>Liked</span> : <span className='cardIcon' onClick={() => { handleNotification(1) }}>Like</span>
                }
                <span className='cardIcon' onClick={() => { handleNotification(2) }}>Comm</span>
                <span className='cardIcon' onClick={() => { handleNotification(3) }}>Share</span>
                <span className='cardIcon'>Info</span>
            </div>
        </div>
    )
}

export default Card