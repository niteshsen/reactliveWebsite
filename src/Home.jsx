import React from 'react' 
import Common from './Common'
import homi from '../src/Images/Home.webp'
const Home = () => {
  return (
    <>
      <Common
         name="Grow your buseniss with"
         imgsrc = {homi}
         visit = "/service"
         btnName = "get started"
      />
    </>
  )
}

export default Home;
