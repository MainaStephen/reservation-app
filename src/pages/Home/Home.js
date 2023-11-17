import React from 'react'
import "./home.scss"
import Navbar from '../../components/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/featured/Featured'
import Propertylist from '../../components/PropertyList/Propertylist'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homecontainer'>
        <Featured/>
        <h1 className='hometitle'>Browse By Property Type</h1>
        <Propertylist/>
        <h1 className='hometitle'>Homes Guests Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>

      </div>
    </div>
  )
}

export default Home