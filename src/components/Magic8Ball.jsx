import { Link } from "react-router-dom"
const Magic8Ball = ()=>{
    return(
        <div className="bg-[#5eb1e7] font-[baloo] bg-no-repeat bg-cover min-h-screen">
        <div className="">
          <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
            <p>Home</p>
          </Link>
    
          <div className="flex justify-center mt-8">
            <h1 className="bg-[#fef0f4] w-[800px] h-[200px] rounded-[30px] text-[80px] flex justify-center items-center">Magic 8 Ball</h1>
          </div>
    
          <div className="mb-6 mt-10 flex items-center flex-col">
            <label id="promptText" for="default-input" className="mb-2 text-center text-[80px]">Enter a Question</label>
            <input type="text" id="input" onChange={(e) => setInput(e.target.value)} className="bg-[#fef0f4] w-[700px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent"/>
          </div>
            <div className="flex justify-center">
            <div className="bg-[url(../src/assets/8Ball.png)] w-[650px] h-[650px] bg-no-repeat bg-cover ">
                <h1 className=" text-center text-[30px] mt-32 text-white"></h1>
            </div>
            </div>
    
            <div className="flex justify-center mt-10">
              <p id="doneBtn"className="bg-[#a1e58c] w-[350px] h-[100px] rounded-[30px] flex justify-center items-center text-[40px] cursor-pointer">Done</p>
          </div>

        </div>
        </div>
    )
} 
export default Magic8Ball