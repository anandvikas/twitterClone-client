import React from 'react'
import "../css/whoToFollow.css"

const WhoToFollow = () => {
    return (
        <div className='wtf'>
            <div className='wtf-heading'>Who to follow</div>
            <div className='wtf-body'>
                {
                    [1, 2, 3].map((val) => {
                        return (
                            <div key={val} className='wtf-body-card'>
                                <div className='wtf-body-card-img'>
                                    <img src='https://picsum.photos/200' />
                                </div>
                                <div className='wtf-body-card-text'>
                                    <p className='wtf-card-text-name'>Vikas anand <img src="./assets/blueTick.png" alt=""/></p>
                                    <p className='wtf-card-text-at'>@vikasAnand</p>
                                </div>
                                <div className='wtf-body-card-btn'>
                                    <button>Follow</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='wtf-seeMore'>
                See more
            </div>
        </div>
    )
}

export default WhoToFollow