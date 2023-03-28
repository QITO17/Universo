import React from 'react'
import Button from './Button'
// import Imagenes from './Images'
const Section = ({quote, getQuote}) => {
  
  return (
    <section className="conteiner">
        <h1>INFOGALAX</h1>
        <article>
          <p className="phraseP">{quote.phrase}</p>
        </article>
        <Button getQuote={getQuote}/>
        <article className="author">
          Fuente: {quote.author}
        </article>
        <div className="planet">
          {/* <Imagenes planeta={vari}/> */}
        </div>
    </section>
  )
}
const vari = document.querySelector('.planet')

export default Section