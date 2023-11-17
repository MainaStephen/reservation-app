import React from 'react'
import "./Navbar.scss"


function Navbar() {
  return (
    <div className='navbar'>
        <div className='navcontainer'>
            <span className='logo'>lamabooking</span>
            <div className='navitems'>
                <button className='navbutton'>register</button>
                <button className='navbutton'>login</button>
            </div>

        </div>
        

    </div>
  )
}

export default Navbar