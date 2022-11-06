import React, { useEffect, useState } from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import { posts } from "./data"

import { io } from "socket.io-client"



const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("")

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    setSocket(io("http://localhost:8000"))
  }, [])

  useEffect(() => {
    if (socket && user) {
      socket.emit('newUser', user)
    }
  }, [socket, user])
  return (
    <div className='container'>
      {
        user ?
          <>
            <Navbar socket={socket} />
            {
              posts.map((val, i) => {
                return <Card key={i} post={val} socket={socket} user={user} />
              })
            }

            <span className='username'>{user}</span>
          </> :
          <div className='login'>
            <input type='text' placeholder='username' onChange={(e) => { setUsername(e.target.value) }} value={username} />
            <button onClick={() => { setUser(username) }}>Login</button>
          </div>
      }
    </div>
  )
}

export default App