import React from 'react'
import HomeAboutSection from '../Components/Home/HomeAboutSection'
import HomeService from '../Components/Home/HomeService'
import HomeTrustedCompany from '../Components/Home/HomeTrustedCompany'
import HomeOurService from '../Components/Home/HomeOurService'
import SingleProduct from '../Components/SingleProductData/SingleProduct'

const Home = () => {
  const data = {
    name : "My STORE"
  }


  return (
    < >
      <HomeAboutSection myData={data} />
      <HomeService />
      <HomeOurService />
      <HomeTrustedCompany />
    </>
  )
}

export default Home
