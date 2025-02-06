import { Link } from "react-router-dom";
import { useState } from "react";
import { add2Nums } from "../services/DataServices";

const AddingNumbers = () => {
    const [sum, setSum] = useState('');
    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');

    const fetchSum = async () => {
        const result = await add2Nums(firstInput, secondInput);
        setSum(result);
    };

    return (
        <div className="bg-[#aa9dd1] bg-[url(../src/assets/AddingBg.png)] font-[baloo] bg-no-repeat bg-cover bg-blend-overlay min-h-screen">
            <div className="">
                <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
                    <p>Home</p>
                </Link>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] md:w-[800px] w-[410px] h-[125px] md:h-[200px] md:text-[80px] text-[50px] rounded-[30px] flex justify-center items-center">Adding Numbers</h1>
                </div>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] md:w-[850px] md:h-[100px] w-[410px] text-center rounded-[30px] text-[50px] md:text-[80px] flex justify-center items-center">Enter Numbers to Add</h1>
                </div>

                <div className="flex md:flex-row flex-col justify-center gap-3">
                    <div className="mb-6 mt-2 flex items-center flex-col">
                        <label id="promptText" htmlFor="first-input" className="mb-2 text-center text-[80px]"></label>
                        <input type="text" id="first-input" value={firstInput} onChange={(e) => setFirstInput(e.target.value)} className="bg-[#fef0f4] w-[350px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent"/>
                    </div>

                    <div className="mb-6 mt-2 flex items-center flex-col">
                        <label id="promptText" htmlFor="second-input" className="mb-2 text-center text-[80px]"></label>
                        <input type="text" id="second-input" value={secondInput} onChange={(e) => setSecondInput(e.target.value)} className="bg-[#fef0f4] w-[350px] h-[100px] rounded-[30px] text-[20px] text-center justify-center border-transparent"/>
                    </div>
                </div>

                <div className="flex justify-center">
                    <h1 className="rounded-[30px] text-[80px] flex justify-center items-center">Sum</h1>
                </div>

                <div className="flex justify-center">
                    <h1 className="bg-[#fef0f4] md:w-[500px] md:h-[100px] w-[410px] h-[100px] rounded-[30px] text-[30px] flex justify-center items-center">
                        {sum}
                    </h1>
                </div>

                <div className="flex justify-center mt-10">
                    <p id="doneBtn" onClick={fetchSum} className="bg-[#a1e58c] w-[350px] h-[100px] rounded-[30px] flex justify-center items-center text-[40px] cursor-pointer">Done</p>
                </div>
            </div>
        </div>
    );
};

export default AddingNumbers;