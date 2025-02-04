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
    <body className='bg-[#fef0f4]'>
      <h1 className='text-center'>Pick a Game!</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {/* Hello World */}
      <a href="/helloWorld" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#fdd79a] flex flex-col'>
        <div className="flex justify-center">
          <img className="mt-10" src="src/assets/HelloWorldIcon.png" alt="hello world" />
        </div>
        <p className="text-center gameFont mt-20">Hello World</p>
      </a>

      {/* Asking Questions */}
      <a href="/askingQuestions" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#c8e1f4] flex flex-col'>
        <div className="flex justify-center">
          <img className="mt-8" src="src/assets/AskingQuestionsIcon.png" alt="asking questions" />
        </div>
        <p className="text-center gameFont mt-6">Asking <br /> Questions</p>
      </a>

      {/* Adding Numbers */}
      <a href="/addingNumbers" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#aa9dd1] flex flex-col'>
        <div className="flex justify-center">
          <img src="src/assets/AddingNumbersIcon.png" alt="adding numbers" />
        </div>
        <p className="text-center gameFont mt-12">Adding <br /> Numbers</p>
      </a>

      {/* Madlibs */}
      <a href="/madlibs" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#ef8889] flex flex-col'>
        <div className="flex justify-center">
          <img src="src/assets/MadlibIcon.png" alt="madlibs" />
        </div>
        <p className="text-center gameFont mt-4">Madlibs</p>
      </a>

      {/* Odd or Even */}
      <a href="/oddOrEven" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#cee3e6] flex flex-col'>
        <div className="flex justify-center">
          <img className="imgSize" src="src/assets/OddOrEven.png" alt="odd or even" />
        </div>
        <p className="text-center gameFont mt-14">Odd or Even</p>
      </a>

      {/* Reverse It (Alphanumeric) */}
      <a href="/reverseItAlphanumeric" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#8ad1d1] flex flex-col'>
        <div className="flex justify-center">
          <img className="imgSize" src="src/assets/file (17).png" alt="reverse alphanumeric" />
        </div>
        <p className="text-center gameFont">Reverse It <br />(Alphanumeric)</p>
      </a>

      {/* Reverse It (Numbers) */}
      <a href="/reverseItNumbers" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#fcc2d2] flex flex-col'>
        <div className="flex justify-center">
          <img className="imgSize" src="src/assets/NumbersIcon.png" alt="reverse numbers" />
        </div>
        <p className="text-center gameFont">Reverse It <br />(Numbers)</p>
      </a>

      {/* Magic 8 Ball */}
      <a href="/magic8Ball" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#5eb1e7] flex flex-col'>
        <div className="flex justify-center">
          <img src="src/assets/file (16).png" alt="magic 8 ball" />
        </div>
        <p className="text-center gameFont mt-4">Magic 8 Ball</p>
      </a>

      {/* Greater or Less */}
      <a href="/greaterOrLess" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#c68dc6] flex flex-col'>
        <div className="flex justify-center">
          <img className="imgSize mt-6" src="src/assets/GuessItIcon.png" alt="greater or less" />
        </div>
        <p className="text-center gameFont mt-4">Greater or Less</p>
      </a>

      {/* Restaurant Picker */}
      <a href="/restaurantPicker" className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#9793d2] flex flex-col'>
        <div className="flex justify-center">
          <img className="imgSize" src="src/assets/RestaurantPickerIcon.png" alt="restaurant picker" />
        </div>
        <p className="text-center gameFont">Restaurant <br /> Picker</p>
      </a>
    </div>
    </body>
  )
}

export default App
