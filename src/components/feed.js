import React from 'react'
import "../css/feed.css"

const Feed = () => {
    return (
        <div className='feed-card'>
            <div className='feed-action1'>
                <div className='feed-action1-part1'>
                    <div className='feed-action1-catg'>destinations</div>
                    <div className='feed-action1-catg-link'>see more</div>
                </div>
                <div className='feed-action1-part2'>
                    <img src="./assets/cross-grey.png" alt="" />
                </div>
            </div>
            <div className='feed-user'>
                <div className='feed-user-part1'>
                    <div className='feed-user-part1-pic'>
                        <img src='https://picsum.photos/200' alt="" />
                    </div>
                    <div className='feed-user-part1-name'>
                        name
                    </div>
                </div>
                <div className='feed-user-part2'>
                    <img src='./assets/more.png' alt="" />
                </div>
            </div>
            <div className='feed-content'>
                <div className='feed-content-comment'>
                    The API will return 30 items per page by default.
                    To request another page, use the ?page parameter.
                    To change the amount of items per page, use the ?limit parameter.
                </div>
                <div className='feed-content-media'>
                    <img src='https://picsum.photos/200' alt="" />
                </div>
            </div>
            <div className='feed-action2'>
                <button className='feed-action2-btn'>
                    <img src='./assets/replyIcon.png' />
                </button>
                <button className='feed-action2-btn'>
                    <img src='./assets/reTweet.png' />
                </button>
                <button className='feed-action2-btn'>
                    <img src='./assets/heart.png' />
                </button>
                <button className='feed-action2-btn'>
                    <img src='./assets/share.png' />
                </button>
            </div>
        </div>
    )
}

export default Feed