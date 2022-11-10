import React from 'react'
import "../css/whatsHappening.css"

const WhatsHappening = () => {
    return (
        <div className='wh'>
            <div className='wh-heading'>What's happening</div>
            <div className='wh-body'>
                {
                    [1, 2, 3].map((val) => {
                        return (
                            <div key={val} className='wh-body-card'>
                                <div className='wh-body-card-text'>
                                    <p className='card-text-related'>Trending in India</p>
                                    <p className='card-text-title'>#IndiaWorldWide Latest updates on the war in Ukraine</p>
                                    <p className='card-text-stat'>3029 Tweets</p>
                                </div>
                                <div className='wh-body-card-image'>
                                    <img src='https://picsum.photos/200' />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className='wh-seeMore'>
                See more
            </div>
        </div>
    )
}

export default WhatsHappening