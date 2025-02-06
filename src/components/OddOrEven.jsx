import { Link } from "react-router-dom"
import { oddOrEven } from "../services/DataServices"
import { useState } from "react"
const OddOrEven = () =>{
    const [oddOrEvenText, setText] = useState('');
    const [input ,setInput] = useState('');

    const getOddOrEven = async () =>{
        const result = await oddOrEven (input);
        setText(result)
    }
    return(
        <div className="bg-[#cee3e6] bg-[url(../src/assets/CloudsBg.png)] font-[baloo] bg-no-repeat bg-cover bg-blend-overlay min-h-screen">
        <div className="">
          <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
            <p>Home</p>
          </Link>
    
          <div className="flex justify-center mt-8">
            <h1 className="bg-[#fef0f4] md:w-[800px] w-[410px]  h-[125px] md:h-[200px] md:text-[80px] text-[50px] rounded-[30px] flex justify-center items-center">Odd or Even</h1>
          </div>
    
          <div className="mb-6 flex items-center flex-col">
            <label id="promptText" for="default-input" className="mb-2 text-center  md:text-[80px] text-[50px]">Enter a Number to Check
</label>
            <input type="text" id="input" value={input} onChange={(e) => setInput(e.target.value)} className="bg-[#fef0f4] w-[350px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent"/>
          </div>
    
            <div className="flex justify-center mt-10">
              <p id="doneBtn" onClick={getOddOrEven}  className="bg-[#a1e58c] w-[350px] h-[100px] rounded-[30px] flex justify-center items-center text-[40px] cursor-pointer">Done</p>
          </div>

          <div className="flex justify-center mt-8">
            <h1 className="bg-[#fef0f4] md:w-[500px] w-[410px] h-[100px] rounded-[30px] text-[16px] flex justify-center items-center">{oddOrEvenText}</h1>
          </div>

        </div>
        </div>
    )
}
export default OddOrEven