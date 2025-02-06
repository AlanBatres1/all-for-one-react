import { Link } from "react-router-dom"
const RestaurantPicker = () => {
    return (
        <div className="bg-[#9893d2] font-[baloo] bg-no-repeat bg-cover min-h-screen">
            <div className="">
                <Link to="/" className="w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
                    <p>Home</p>
                </Link>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] w-[800px] h-[200px] rounded-[30px] text-[80px] flex justify-center items-center">Restaurant Picker</h1>
                </div>

                <div className="flex flex-row justify-center gap-3">

                    <div className='flex justify-center'>
                        <div className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#8ad1d1] flex flex-col justify-center items-center'>
                            <div className="flex justify-center">
                                <img className="mt-10" src="src/assets/Chinese.png" alt="hello world" />
                            </div>
                            <p className="text-center mt-20">Chinese</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#ef8889] flex flex-col justify-center items-center'>
                            <div className="flex justify-center">
                                <img className="mt-10" src="src/assets/fast-food.png" alt="hello world" />
                            </div>
                            <p className="text-center mt-20">Fast Food</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#fdd79a] flex flex-col justify-center items-center'>
                            <div className="flex justify-center">
                                <img className="mt-10" src="src/assets/taco.png" alt="hello world" />
                            </div>
                            <p className="text-center mt-20">Mexican</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default RestaurantPicker