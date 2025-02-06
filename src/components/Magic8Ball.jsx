import { Link } from "react-router-dom"
const Magic8Ball = ()=>{
    return(
        <div className="bg-[#5eb1e7] font-[baloo] bg-no-repeat bg-cover min-h-screen">
        <div className="">
          <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
            <p>Home</p>
          </Link>
    
          <div className="flex justify-center mt-8">
            <h1 className="bg-[#fef0f4] md:w-[800px] w-[410px]  h-[125px] md:h-[200px] md:text-[80px] text-[50px] rounded-[30px] flex justify-center items-center">Magic 8 Ball</h1>
          </div>
    
          <div className="mb-6 mt-10 flex items-center flex-col">
            <label id="promptText" for="default-input" className="mb-2 text-center text-[40px] md:text-[80px]">Enter a Question</label>
            <input type="text" id="input" onChange={(e) => setInput(e.target.value)} className="bg-[#fef0f4] md:w-[700px] w-[410px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent"/>
          </div>
            <div className="flex justify-center">
            <div className="bg-[url(../src/assets/8Ball.png)] md:w-[650px] md:h-[650px] w-[410px] h-[410px] bg-no-repeat bg-cover ">
                <h1 className=" text-center text-[20px] md:text-[30px] md:mt-32 mt-20 text-white">gewggew</h1>
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