import React from 'react'
import HomeAboutSection from '../Components/Home/HomeAboutSection'

const About = () => {
  const data ={
    name : "My Ecommerse"
  }

  return (
    <>
      <HomeAboutSection myData={data} />
    </>
  )
}

export default About
