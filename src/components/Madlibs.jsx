import { Link } from "react-router-dom"
const Madlibs = () => {
    return (
        <div className="bg-[#ef8889] font-[baloo] bg-no-repeat bg-cover min-h-screen">
            <div className="">
                <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
                    <p>Home</p>
                </Link>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] w-[800px] h-[200px] rounded-[30px] text-[80px] flex justify-center items-center">Madlibs</h1>
                </div>

                <div className="madlibsPlacement flex justify-center mt-5">
                    <form>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <input type="text" id="input" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Name 1" required />
                            </div>
                            <div>
                                <input type="text" id="input2" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Name 2" required />
                            </div>
                            <div>
                                <input type="text" id="input3" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Store" required />
                            </div>
                            <div>
                                <input type="tel" id="input4" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Beverage" required />
                            </div>
                            <div>
                                <input type="text" id="input5" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Snack" required />
                            </div>
                            <div>
                                <input type="text" id="input6" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Sport" required />
                            </div>
                            <div>
                                <input type="text" id="input7" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Movie" required />
                            </div>
                            <div>
                                <input type="text" id="input8" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Restaurant" required />
                            </div>
                            <div>
                                <input type="text" id="input9" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Vieogame" required />
                            </div>
                            <div>
                                <input type="text" id="input10" className="text-gray-900 text-[40px] h-[50px] w-[390px] rounded-[30px] border-transparent madlibsInputBox block p-2.5 text-center" placeholder="Food" required />
                            </div>
                        </div>
                    </form>

                </div>

                <div className="flex justify-center mt-10">
                    <p id="doneBtn" className="bg-[#a1e58c] w-[350px] h-[100px] rounded-[30px] flex justify-center items-center text-[40px] cursor-pointer">Done</p>
                </div>
                
            </div>
        </div>
    )
}
export default Madlibs