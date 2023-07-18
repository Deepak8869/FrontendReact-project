import React from 'react';
import Founder from './Founder';
import Menu from './Menu';
import {motion} from "framer-motion";

const Home = () => {

  const options = {
    initial:{
      x:"-100%",
      opacity:0,
    },
    whileInView:{
      x:"0",
      opacity:1,
    }
  }
  return (
  <>
<section className='home'>
    <div>


      <motion.h1 {...options}>MBA Burger Wala</motion.h1>
      <motion.p {...options} transition={{
        delay:0.2,
      }}>Give yourself a chance to taste a tasty burger...</motion.p>
    </div>


    <motion.a href="#menu"
    initial={{
      y:"-100%",
      opacity:0,
    }}
    whileInView={{
      y:"0",
      opacity:1,
    }}
    transition={{
      delay:0.3,}}>Explore Menu</motion.a>
  </section>

  <Founder />

  <Menu />
  </>
  )
}

export default Home;