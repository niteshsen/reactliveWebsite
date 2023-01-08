import React from 'react'
import Common from './Common'
import anim from '../src/Images/About.jpg'
const About = () => {
  return (
   <>
      <Common
        name="welcome to About page"
        imgsrc = {anim}
        visit = "/contact"
        btnName = "Contact Now"
      />
   </>
  )
}

export default About;
