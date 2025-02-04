import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HelloWorld from './components/HelloWorld.jsx'
import AskingQuestions from './components/AskingQuestions.jsx'
import AddingNumbers from './components/AddingNumbers.jsx'
import Madlibs from './components/Madlibs.jsx'
import OddOrEven from './components/OddOrEven.jsx'
import ReverseItAlphanumeric from './components/ReverseItAlphanumeric.jsx'
import ReverseItNumbers from './components/ReverseItNumbers.jsx'
import Magic8Ball from './components/Magic8Ball.jsx'
import GreaterOrLess from './components/GreaterOrLess.jsx'
import RestaurantPicker from './components/RestaurantPicker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Item Stay</h1>
    <BrowserRouter>
    <Routes>
      <Route path= '/' element ={<App/>}/>
      <Route path='/helloWorld' element={<HelloWorld/>}/>
      <Route path='/askingQuestions' element={<AskingQuestions/>}/>
      <Route path='/addingNumbers' element={<AddingNumbers/>}/>
      <Route path='/madlibs' element={<Madlibs/>}/>
      <Route path='/oddOrEven' element={< OddOrEven/>}/>
      <Route path='/reverseItAlphanumeric' element={< ReverseItAlphanumeric/>}/>
      <Route path='/reverseItNumbers' element={< ReverseItNumbers/>}/>
      <Route path='/magic8Ball' element={<Magic8Ball/>}/>
      <Route path='/greaterOrLess/' element={< GreaterOrLess/>}/>
      <Route path='/restaurantPicker' element={<RestaurantPicker/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
