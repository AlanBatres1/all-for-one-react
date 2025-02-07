import { Link } from "react-router-dom"
import { greaterOrLess } from "../services/DataServices"
import { useState } from "react"
const GreaterOrLess = () =>{
    const [response, setResponse] = useState('');
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');

    const getGreaterOrLess = async () =>{
        const response = await greaterOrLess(input, input2);
        setResponse(response)
    }

    return(
        <div className="bg-[#c68dc6] font-[baloo] bg-no-repeat bg-cover min-h-screen">
            <div className="">
                <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
                    <p>Home</p>
                </Link>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] md:w-[800px] text-center w-[410px] h-[125px] md:h-[200px] md:text-[80px] text-[50px] rounded-[30px] flex justify-center items-center">Greater or Less Than</h1>
                </div>

                <div className="flex md:flex-row flex-col justify-center gap-3">
                <div className="mb-6 mt-2 flex items-center flex-col">
                    <p className="text-[30px]">Enter Number</p>
                    <label id="promptText" for="default-input" className="mb-2 text-center text-[80px]"></label>
                    <input type="text" id="input" value={input} onChange={(e) => setInput(e.target.value)} className="bg-[#fef0f4] w-[350px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent" />
                </div>

                <div className="mb-6 mt-2 flex items-center flex-col">
                <p className="text-[30px]">Enter Number</p>
                    <label id="promptText" for="default-input" className="mb-2 text-center text-[80px]"></label>
                    <input type="text" id="input" value={input2} onChange={(e) => setInput2(e.target.value)} className="bg-[#fef0f4] w-[350px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent" />
                </div>
                </div>

                <div className="flex justify-center mt-6">
                    <p id="doneBtn" onClick={getGreaterOrLess} className="bg-[#a1e58c] w-[350px] h-[100px] rounded-[30px] flex justify-center items-center text-[40px] cursor-pointer">Done</p>
                </div>

                <div className="flex justify-center mt-6">
                    <h1 className="bg-[#fef0f4] md:w-[500px] w-[410px]  h-[100px] rounded-[30px] text-[30px] flex justify-center items-center">{response}</h1>
                </div>

            </div>
        </div>
    )
}
export default GreaterOrLess