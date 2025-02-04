import './App.css'
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

function App() {

  return (
    <div className='flex flex-col'>
      <a href="/helloWorld"> Hello World</a>
      <a href="/askingQuestions"> Asking Questions</a>
      <a href="/addingNumbers">Adding Numbers </a>
      <a href="/madlibs">Madlibs </a>
      <a href="/oddOrEven">Odd Or Even </a>
      <a href="/reverseItAlphanumeric">Reverse It Alphanumeric </a>
      <a href="/reverseItNumbers">Reverse It Numbers</a>
      <a href="/magic8Ball">Magic 8 Ball </a>
      <a href="/greaterOrLess">Greater Or Less </a>
      <a href="/restaurantPicker">Restaurant Picker </a>
    </div>
  )
}

export default App
