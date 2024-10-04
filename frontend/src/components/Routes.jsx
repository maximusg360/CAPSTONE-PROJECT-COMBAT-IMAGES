import React from 'react'
import { Route, Routes as R } from 'react-router-dom'
import{Home, Gallery, About} from './components'
import EditCardForm from './EditCardForm'
import SignUp from './SignUp'

function Routes(){
  return (
    <>
    <R>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Gallery" element={<Gallery mydata={mydata}/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      
      </R>
    </>
  )
}

export default Routes
