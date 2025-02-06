import { Link } from "react-router-dom"
import { madlibs } from "../services/DataServices"
import { useState } from "react"
const Madlibs = () => {
    const [madlib, setMadlib] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');
    const [input7, setInput7] = useState('');
    const [input8, setInput8] = useState('');
    const [input9, setInput9] = useState('');
    const [input10, setInput10] = useState('');

    const handleMadlibs = async () => {
        const result = await madlibs(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10);
        setMadlib(result);
    };

    return (
        <div className="bg-[#ef8889] font-[baloo] bg-no-repeat bg-cover min-h-screen">
            <div className="">
                <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
                    <p>Home</p>
                </Link>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] md:w-[800px] w-[410px]  h-[125px] md:h-[200px] md:text-[80px] text-[50px] rounded-[30px] flex justify-center items-center">Madlibs</h1>
                </div>

                <div className="madlibsPlacement flex justify-center mt-5">
                    <form>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <input type="text" id="input" value={input1} onChange={(e) => setInput1(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Name 1" required />
                            </div>
                            <div>
                                <input type="text" id="input2" value={input2} onChange={(e) => setInput2(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Name 2" required />
                            </div>
                            <div>
                                <input type="text" id="input3" value={input3} onChange={(e) => setInput3(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Store" required />
                            </div>
                            <div>
                                <input type="tel" id="input4" value={input4} onChange={(e) => setInput4(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Beverage" required />
                            </div>
                            <div>
                                <input type="text" id="input5" value={input5} onChange={(e) => setInput5(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Snack" required />
                            </div>
                            <div>
                                <input type="text" id="input6" value={input6} onChange={(e) => setInput6(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Sport" required />
                            </div>
                            <div>
                                <input type="text" id="input7" value={input7} onChange={(e) => setInput7(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Movie" required />
                            </div>
                            <div>
                                <input type="text" id="input8" value={input8} onChange={(e) => setInput8(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Restaurant" required />
                            </div>
                            <div>
                                <input type="text" id="input9" value={input9} onChange={(e) => setInput9(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Vieogame" required />
                            </div>
                            <div>
                                <input type="text" id="input10" value={input10} onChange={(e) => setInput10(e.target.value)} className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Food" required />
                            </div>
                        </div>
                    </form>

                </div>

                <div className="flex justify-center mt-10">
                    <p id="doneBtn" onClick={handleMadlibs} className="bg-[#a1e58c] w-[350px] h-[100px] rounded-[30px] flex justify-center items-center text-[40px] cursor-pointer">Done</p>
                </div>

                <div className="flex justify-center mt-6">
                    <p className="bg-[#fef0f4] w-[410px] md:w-[800px]  h-[300px] text-[12px] md:text-[18px] rounded-[30px] p-5 ">{madlib}</p>
                </div>

            </div>
        </div>
    )
}
export default Madlibs