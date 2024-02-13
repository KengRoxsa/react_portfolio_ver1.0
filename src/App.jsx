import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createRef, Component } from 'react';



// External Libs
import AnimatedCursor from 'react-animated-cursor'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Testimonial from './components/Testimonial/Testimonial'

import Skill from './components/Skill/Skill'
import Service from './components/Service/Service'
import Port from './components/Port/Port'
import Number from './components/Number/Number'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
      <AnimatedCursor
        innerSize={13}
        outerSize={8}
        color='193, 65, 125'
        outerAlpha={0.2}
        innerScale={1.5}
        outerStyle={{
          border: '3px solid #fff',
        }}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />


      <Navbar />
      <Hero />
      <Skill />
      <Service />
      <Port />
      <Number />
      <Testimonial />
      <Contact />
      
      <Footer />
    </>
  )
}

export default App
