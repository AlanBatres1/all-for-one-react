import { Link } from "react-router-dom"
const ReverseItAlphanumeric = () =>{
    return(
        <div className="bg-[#8ad1d1] font-[baloo] bg-no-repeat bg-cover min-h-screen">
            <div className="">
                <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
                    <p>Home</p>
                </Link>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] md:w-[800px] w-[410px]  h-[125px] md:h-[200px] md:text-[80px] text-center text-[50px] rounded-[30px] flex justify-center items-center">Reverse It Alphanumeric</h1>
                </div>

                <div className="flex lg:flex-row flex-col justify-center gap-3">
                <div className="flex justify-center items-center mt-4 mb-6 flex-col">
                    <p className="text-center text-[30px]">Enter Text</p>
                    <label id="promptText" for="default-input" className="mb-2 text-center text-[80px] flex"></label>
                    <input type="text" id="input" onChange={(e) => setInput(e.target.value)} className="bg-[#fef0f4] w-[350px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent" />
                </div>

                <div className="flex justify-center">
                <img className="mt-10 md:w-[350px] md:h-[350px] w-[200px] h-[200px]" src="../src/assets/swap.png" alt="reverse Icon" />
                </div>

                <div className="flex items-center justify-center mt-4 mb-6 flex-col">
                    <p className="text-center text-[30px]">Reversed Text</p>
                    <h1 className="bg-[#fef0f4] w-[350px] h-[100px] rounded-[30px] text-[30px] flex justify-center items-center"></h1>
                </div>
                </div>



                <div className="flex justify-center mt-10">
                    <p id="doneBtn" className="bg-[#a1e58c] w-[350px] h-[100px] rounded-[30px] flex justify-center items-center text-[40px] cursor-pointer">Done</p>
                </div>
            </div>
        </div>
    )
}
export default ReverseItAlphanumeric