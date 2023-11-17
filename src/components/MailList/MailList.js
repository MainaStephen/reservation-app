import React from 'react'
import "./MailList.scss"


function MailList() {
  return (
    <div className='mail'>
        <h1 className='mailtitle'>
            save time,save money!
        </h1>
        <span className='maildesc'>Sign up and we'll send the best deals to you</span>
        <div className='mailinputcontainer'>
            <input type='email' placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList