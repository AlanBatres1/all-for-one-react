
import { useState } from "react"
import { Link, data } from "react-router-dom"
const HelloWorld = () =>{


    const [htmlText , setJava] = useState("Enter Your Name");
    const [userInput, setInput]= useState("")

    const apiUrl = "https://allforonealan.azurewebsites.net"
    
    
    const updateHtmlText = async () => {
        console.log("Works")
        const response = await fetch(`${apiUrl}/SayHello/SayHello/${userInput}`);
        data = await response.text()
        
        setJava(data);
    }

    
    return(
        <div className="bg-[#fdd79a] bg-[url(../src/assets/HelloBg.png)] font-[baloo] bg-no-repeat bg-cover bg-blend-overlay min-h-screen">
        <div className="">
          <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
            <p>Home</p>
          </Link>
    
          <div className="flex justify-center mt-8">
            <h1 className="bg-[#fef0f4] md:w-[800px] w-[410px]  h-[125px] md:h-[200px] md:text-[80px] text-[50px] rounded-[30px] flex justify-center items-center">Hello World</h1>
          </div>
    
          <div className="mb-6 mt-10 flex items-center flex-col">
            <label id="promptText" for="default-input" className="mb-2 text-center md:text-[80px] text-[50px]">{htmlText}</label>
            <input type="text" id="input" value={userInput} onChange={(e) => setInput(e.target.value)} className="bg-[#fef0f4] md:w-[700px] w-[410px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent"/>
          </div>
    
            <div className="flex justify-center mt-10">
              <p id="doneBtn" onClick={updateHtmlText}  className="bg-[#a1e58c] w-[350px] h-[100px] rounded-[30px] flex justify-center items-center text-[40px] cursor-pointer">Done</p>
          </div>

        </div>
        </div>
    )
}
export default HelloWorld