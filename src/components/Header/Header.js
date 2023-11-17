import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import {DateRange} from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; //main css file
import 'react-date-range/dist/theme/default.css'; //theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
 


function Header({type}) {
  const [openDate,setOpenDate] = useState(false)
  const [destination,setdestination] = useState("")
  const [date, setDate] = useState([{
    startDate: new Date(),
    endDate:new Date(),
    key:'selection'
  }]);

  const [openOptions,setOpenOptions] = useState(false)
  const [options,setOptions] = useState({
    adult:1,
    children:0,
    room:1,
  })


  const handleOption = (name,operation) =>{
    setOptions(prev => {return{
    ...prev,
    [name]:operation === "i" ? options[name] +1 : options[name] -1, }
    })
  }

  const handlesearch = ()=>{
    navigate("/hotels",{state:{destination,date,options}})
  }

  const navigate = useNavigate()
  return (
    <div className="header">
      <div className={type === "list" ? "headercontainer listmode" : "headercontainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
  {   type !== "list" &&    
  <>
        <h1 className="headertitle"> A lifetime of discounts? It's Genius.</h1>
        <p className="headerdescription">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className='headerbtn'>Sign In / Register</button>
        <div className='headersearch'>
            <div className='headersearchitem'>
            <FontAwesomeIcon icon={faBed} className='headericon'/>
            <input type="text" placeholder='where are you going?' className='headersearchinput' onChange={e=>setdestination(e.target.value)}/>
            </div>
            <div className='headersearchitem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headericon'/>
            <span onClick={() => setOpenDate(!openDate)} className='headersearchtext'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
            {openDate && <DateRange editableDateInputs = {true} onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date} className='date' minDate={new Date()}/>}
            </div>
            <div className='headersearchitem'>
            <FontAwesomeIcon icon={faPerson} className='headericon'/>
            <span onClick={()=>setOpenOptions(!openOptions)} className='headersearchtext'>{`${options.adult} adult ${options.children} children ${options.room} room`}</span>
            {openOptions && <div className='options'>
              <div className='optionitem'>
                <span className='optiontext'> Adult</span>
                <div className='optioncounter'>
                  <button className='optioncounterbutton'disabled={options.adult<=1} onClick={()=>handleOption("adult","d")}>-</button>
                  <span className='optioncounternumber'>{options.adult}</span>
                  <button className='optioncounterbutton' onClick={()=>handleOption("adult","i")}>+</button>
                </div>
              </div>
              <div className='optionitem'>
                <span className='optiontext'> Children</span>
                <div className='optioncounter'>
                  <button className='optioncounterbutton' disabled={options.children<=0} onClick={()=>handleOption("children","d")}>-</button>
                  <span className='optioncounternumber'>{options.children}</span>
                  <button className='optioncounterbutton' onClick={()=>handleOption("children","i")}>+</button>
                </div>
              </div>
              <div className='optionitem'>
                <span className='optiontext'>Room</span>
                <div className='optioncounter'>
                  <button className='optioncounterbutton' disabled={options.room<=1} onClick={()=>handleOption("room","d")}>-</button>
                  <span className='optioncounternumber'>{options.room}</span>
                  <button className='optioncounterbutton'  onClick={()=>handleOption("room","i")}>+</button>
                </div>
              </div>
            </div>}
            </div>
            <div className='headersearchitem'>
              <button className='headerbtn' onClick={handlesearch}>Search</button>
            </div>
            
        </div>
        </>}
      </div>
    </div>
  );
}

export default Header;
