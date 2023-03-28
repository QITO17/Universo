import './App.css'
import React, { useState } from 'react'
import Phrasess from './components/Phrasess'
import Section from './components/Section'

const images = ['bg1', 'bg2', 'bg3', 'bg4'];
const planet = ['planet1', 'planet2', 'planet3', 'planet4'];


function App() {
    const getItem = (arrItem) => {
      const randonIndex = Math.floor(Math.random()*arrItem.length);
      return arrItem[randonIndex];
    }


    const [quote, setQuote] = useState(getItem(Phrasess()))
    const [bgImage, setBgImage] = useState(getItem(images))
    const [bgPlanet, setBgPlanet] = useState(getItem(planet))


    const getQuote = () => {
      setQuote(getItem(Phrasess()))
      setBgImage(getItem(images))
      setBgPlanet(getItem(planet))
    }


  return (
    <div className={`App ${bgImage}`}>
      <Section quote={quote} getQuote={getQuote}/>  
      <div className={`planett ${bgPlanet}`}></div>
    </div>
  )
}


export default App
