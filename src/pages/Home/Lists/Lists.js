import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import Navbar from '../../../components/Navbar'
import "./Lists.scss"
import { useLocation } from 'react-router-dom'
import format from 'date-fns/format'
import { DateRange } from 'react-date-range'
import Searchitem from '../../../components/searchitem/Searchitem'




function Lists() {

const location = useLocation();
const [ destination,setDestination] = useState(location.state.destination)
const [ openDate,setOpenDate] = useState(false)
const [ date,setDate] = useState(location.state.date)
const [ options,setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='listcontainer'>
        <div className='listwrapper'>
          <div className='listsearch'>
            <h1 className='listtitle'>search</h1>
            <div className='listitem'>
              <label>Destination</label>
              <input type='text' placeholder={destination}/>
            </div>
            <div className='listitem'>
              <label>check-in date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
             {openDate && <DateRange onChange={item=>setDate([item.selection])} minDate={new Date()} ranges={date}/>}
        
              
            </div>
            <div className='listitem'>
              <label>Options</label>
              <div className='lsoptionitem'>
                <span className='lsoptiontext'>Min price  <small>per night</small></span>
                <input type='number' className='lsoptioninput'></input>
              </div>
            </div>
            <div className='listitem'>
             
              <div className='lsoptionitem'>
                <span className='lsoptiontext'> Max price  <small>per night</small></span>
                <input type='number' className='lsoptioninput'></input>
              </div>
            </div>
            <div className='listitem'>
             
              <div className='lsoptionitem'>
                <span className='lsoptiontext'>Adult</span>
                <input type='number' min={1} className='lsoptioninput' placeholder={options.adult}></input>
              </div>
            </div>
            <div className='listitem'>
              
              <div className='lsoptionitem'>
                <span className='lsoptiontext'>Children</span>
                <input type='number' min={0} className='lsoptioninput' placeholder={options.children}></input>
              </div>
            </div>
            <div className='listitem'>
              <div className='lsoptionitem'>
                <span className='lsoptiontext'>Room</span>
                <input type='number' min={1} className='lsoptioninput' placeholder={options.room}></input>
              </div>
            </div>
            <button>search</button>
          </div>
          <div className='listresult'>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists