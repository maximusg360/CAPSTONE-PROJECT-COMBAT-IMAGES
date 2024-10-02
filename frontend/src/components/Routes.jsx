import React from 'react'
import { Route, Routes as R } from 'react-router-dom'
import{Home, Gallery, About} from './components'
import EditCardForm from './EditCardForm'

function Routes(){
  return (
    <>
    <R>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Gallery" element={<Gallery mydata={mydata}/>} />
      
      </R>
    </>
  )
}

export default Routes