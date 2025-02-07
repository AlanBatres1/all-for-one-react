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
import { Link } from 'react-router-dom'

function App() {

  return (
    <body className='bg-[#fef0f4] bg-cover font-[baloo] text-[30px] min-h-screen'>
    <h1 className='text-center text-[80px]'>Pick a Game!</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 justify-center items-center">
      {/* Hello World */}
      <div className='flex justify-center'>
      <Link to="/helloWorld" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#fdd79a] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img className="mt-10" src="/assets/HelloWorldIcon.png" alt="hello world" />
        </div>
        <p className="text-center mt-20">Hello World</p>
      </Link>
      </div>
  
      {/* Asking Questions */}
      <div className='flex justify-center'>
      <Link to="/askingQuestions" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#c8e1f4] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img className="mt-8" src="/assets/AskingQuestionsIcon.png" alt="asking questions" />
        </div>
        <p className="text-center mt-6">Asking <br/> Questions</p>
      </Link>
      </div>
  
      {/* Adding Numbers */}
      <div className='flex justify-center'>
      <Link to="/addingNumbers" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#aa9dd1] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img src="/assets/AddingNumbersIcon.png" alt="adding numbers" />
        </div>
        <p className="text-center mt-12">Adding <br/> Numbers</p>
      </Link>
      </div>
  
      {/* Madlibs */}
      <div className='flex justify-center'>
      <Link to="/madlibs" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#ef8889] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img src="/assets/MadlibIcon.png" alt="madlibs" />
        </div>
        <p className="text-center mt-4">Madlibs</p>
      </Link>
      </div>
  
      {/* Odd or Even */}
      <div className='flex justify-center'>
      <Link to="/oddOrEven" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#cee3e6] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img className="" src="/assets/OddOrEven.png" alt="odd or even" />
        </div>
        <p className="text-center mt-4">Odd or Even</p>
      </Link>
      </div>
  
      {/* Reverse It (Alphanumeric) */}
      <div className='flex justify-center'>
      <Link to="/reverseItAlphanumeric" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#8ad1d1] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img className="w-[200px] h-[200px]" src="/assets/file (17).png" alt="reverse alphanumeric" />
        </div>
        <p className="text-center">Reverse It <br />(Alphanumeric)</p>
      </Link>
      </div>
  
      {/* Reverse It (Numbers) */}
      <div className='flex justify-center'>
      <Link to="/reverseItNumbers" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#fcc2d2] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img className="w-[200px] h-[200px]" src="/assets/NumbersIcon.png" alt="reverse numbers" />
        </div>
        <p className="text-center">Reverse It <br />(Numbers)</p>
      </Link>
      </div>
  
      {/* Magic 8 Ball */}
      <div className='flex justify-center'>
      <Link to="/magic8Ball" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#5eb1e7] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img src="/assets/file (16).png" alt="magic 8 ball" />
        </div>
        <p className="text-center mt-9">Magic 8 Ball</p>
      </Link>
      </div>
  
      {/* Greater or Less */}
      <div className='flex justify-center'>
      <Link to="/greaterOrLess" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#c68dc6] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img className=" mt-6" src="/assets/GuessItIcon.png" alt="greater or less" />
        </div>
        <p className="text-center mt-14">Greater or Less</p>
      </Link>
      </div>
  
      {/* Restaurant Picker  */}
      <div className='flex justify-center'>
      <Link to="/restaurantPicker" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#9793d2] flex flex-col justify-center items-center'>
        <div className="flex justify-center">
          <img className="" src="/assets/RestaurantPickerIcon.png" alt="restaurant picker" />
        </div>
        <p className="text-center mt-7">Restaurant <br /> Picker</p>
      </Link>
      </div>
    </div>
  </body>
  )
}

export default App
