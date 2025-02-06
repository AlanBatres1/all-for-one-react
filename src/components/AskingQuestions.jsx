
import { Link } from "react-router-dom"
const AskingQuestions = () => {

    return (
        <div className="bg-[#c8e1f4] font-[baloo] bg-no-repeat bg-cover min-h-screen">
            <div className="">
                <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
                    <p>Home</p>
                </Link>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] md:w-[800px] w-[410px]  h-[125px] md:h-[200px] md:text-[80px] text-[50px] rounded-[30px] flex justify-center items-center">Asking Questions</h1>
                </div>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] md:w-[700px] md:h-[100px] w-[410px] h-[100px] rounded-[30px] text-[40px] flex justify-center items-center">What is Your Name?</h1>
                </div>

                <div className="mb-6 mt-2 flex items-center flex-col">
                    <label id="promptText" for="default-input" className="mb-2 text-center text-[80px]"></label>
                    <input type="text" id="input" onChange={(e) => setInput(e.target.value)} className="bg-[#fef0f4] md:w-[700px] md:h-[100px] w-[410px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent" />
                </div>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] md:w-[700px] md:h-[100px] w-[410px] h-[100px] text-center rounded-[30px] text-[40px] flex justify-center items-center">What time did you Wake up?</h1>
                </div>

                <div className="mb-6 mt-2 flex items-center flex-col">
                    <label id="promptText" for="default-input" className="mb-2 text-center text-[80px]"></label>
                    <input type="text" id="input" onChange={(e) => setInput(e.target.value)} className="bg-[#fef0f4] md:w-[700px] md:h-[100px] w-[410px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent" />
                </div>

                <div className="flex justify-center">
                    <p id="doneBtn" className="bg-[#a1e58c] w-[350px] h-[100px] rounded-[30px] flex justify-center items-center text-[40px] cursor-pointer">Done</p>
                </div>

                <div className="flex justify-center mt-10">
                    <h1 className="bg-[#fef0f4] md:w-[800px] md:h-[200px] w-[410px] h-[200px] rounded-[30px] text-[30px] flex justify-center items-center"></h1>
                </div>
            </div>
        </div>
    )
}

export default AskingQuestions