import React from 'react'
import "../css/landing.css"

const Landing = () => {
    return (
        <div className='landing-div'>
            <div className='landing-div-poster'>
                <img src="./assets/poster1.png" alt="" />
                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr">
                    <g>
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                        </path>
                    </g>
                </svg>
            </div>
            <div className='landing-div-actions'>
                <div className='actions-logo'><img src="./assets/twitter.png" alt="" /></div>
                <div className='actions-head'>Happening now</div>
                <div className='actions-subHead'>Join twitter today</div>
                <div className='actions-btn'>
                    <button className='btn1'>
                        <img src="./assets/googleIcon.png" alt="" /> Sign up with google
                    </button>
                </div>
                <div className='actions-btn'>
                    <button className='btn1'>
                        
                    </button>
                </div>
                <p className='actions-or'>or</p>
                <div className='actions-btn'>
                    <button className='btn1 bluBtn'>Signup with phone or email</button>
                </div>
                <p className='actions-tnc'>By signing up, you agree to the <a className='actions-tnc-link'>Terms of Service</a> and <a className='actions-tnc-link'>Privacy Policy</a>, including Cookie Use.</p>
                <p className='actions-or2'>Already have an account?</p>
                <div className='actions-btn'>
                    <button className='btn1'>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Landing