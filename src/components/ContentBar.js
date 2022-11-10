import React, { useEffect, useRef } from 'react'
import Feed from './feed'
import "../css/contentBar.css"
import Header1 from './Header1'

const ContentBar = () => {
  const contentRef = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log("ddf")
      contentRef.current.scroll()
    })
  }, [])
  return (
    <div ref={contentRef} className='content-bar'>
      <Header1 />
      <Feed />
      <Feed />
      {/* <Feed /> */}
    </div>
  )
}

export default ContentBar