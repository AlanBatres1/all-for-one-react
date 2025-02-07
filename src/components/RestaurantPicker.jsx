import { Link } from "react-router-dom";
import { resaurantPickerChinese } from "../services/DataServices";
import { resaurantPickerFastFood } from "../services/DataServices";
import { resaurantPickerMexican } from "../services/DataServices";
import { useState } from "react";

const RestaurantPicker = () => {
    const [response, setResponse] = useState('');

    const chinese = async () => {
        const result = await resaurantPickerChinese();
        setResponse(result);
    };

    const fastFood = async () => {
        const result = await resaurantPickerFastFood();
        setResponse(result);
    };

    const mexican = async () => {
        const result = await resaurantPickerMexican();
        setResponse(result);
    };

    return (
        <div className="bg-[#9893d2] font-[baloo] bg-no-repeat bg-cover min-h-screen">
            <div className="">
                <Link to="/" className=" text-center w-[200px] h-[100px] bg-[#fef0f4] text-[40px] flex justify-center items-center rounded-br-[30px]">
                    <p>Home</p>
                </Link>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] md:w-[800px] w-[410px]  h-[125px] md:h-[200px] md:text-[80px] text-[50px] rounded-[30px] flex justify-center items-center">Restaurant Picker</h1>
                </div>
                <h1 className="text-center md:text-[80px] text-[40px]">Pick a Category</h1>

                <div className="flex md:flex-row flex-col justify-center  gap-7">

                    <div onClick={chinese} className='flex justify-center items-center'>
                        <div className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#8ad1d1] flex flex-col justify-center items-center'>
                            <div className="flex justify-center">
                                <img className="mt-4" src="/assets/Chinese.png" alt="hello world" />
                            </div>
                            <p className="text-center mt-4">Chinese</p>
                        </div>
                    </div>

                    <div onClick={fastFood} className='flex justify-center'>
                        <div className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#ef8889] flex flex-col justify-center items-center'>
                            <div className="flex justify-center">
                                <img className="mt-4" src="/assets/fast-food.png" alt="hello world" />
                            </div>
                            <p className="text-center mt-4">Fast Food</p>
                        </div>
                    </div>

                    <div onClick={mexican} className='flex justify-center'>
                        <div className='w-[250px] h-[325px] cursor-pointer rounded-[30px] bg-[#fdd79a] flex flex-col justify-center items-center'>
                            <div className="flex justify-center">
                                <img className="mt-4" src="/assets/taco.png" alt="hello world" />
                            </div>
                            <p className="text-center mt-4">Mexican</p>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center mt-5">
                    <h1 className="bg-[#fef0f4] w-[500px] h-[100px] rounded-[30px] text-[40px] flex justify-center items-center">{response}</h1>
                </div>

            </div>
        </div>
    );
};

export default RestaurantPicker;