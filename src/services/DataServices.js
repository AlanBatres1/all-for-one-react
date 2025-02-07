import { data } from "react-router-dom";

const apiUrl = "https://allforonealan.azurewebsites.net"

// Say Hello
const sayHello = async (Name) => {
    const response = await fetch(apiUrl + `/SayHello/SayHello/${Name}`);
    const data = await response.text()
    console.log(data)
    return data;
}

// Adding Numbers
const add2Nums = async (Input, Input2) => {
    const response = await fetch(apiUrl + `/Add2Nums/AddNumbers/${Input}/${Input2}`);
    const data = await response.text();
    console.log(data)
    return data;
}

// Asking Questions
const askingQuestions = async (userName, time) => {
    const response = await fetch(apiUrl + `/AskingQuestions/AskingQuestions/${userName}/${time}`);
    const data = response.json();
    console.log(data);
    return data;
}

// Madlibs 
const madlibs = async (Input, InputTwo, InputThree, InputFour, InputFive, InputSix, InputSeven, InputEight, InputNine, InputTen) => {
    const response = await fetch(apiUrl + `/MadLib/MadLib/${Input}/${InputTwo}/${InputThree}/${InputFour}/${InputFive}/${InputSix}/${InputSeven}/${InputEight}/${InputNine}/${InputTen}`);
    const data = await response.text();
    console.log(data);
    return data;
}

// Odd or Even
const oddOrEven = async (Input) => {
    const response = await fetch(apiUrl + `/OddOrEven/OddOrEven/` + Input);
    const data = await response.text();
    console.log(data)
    return data;
}

// Reverse it Alphanumeric
const reverseItAlphanumeric = async (Input) => {
    const response = await fetch(apiUrl + `/ReverseItAlphanumeric/ReverseItAlphanumeric/${Input}`);
    const data = await response.json();
    console.log(data[0])
    return data
}

// Reverse it Numbers
const reverseItNumbers = async (Input) => {
    const response = await fetch(apiUrl + `/ReverseItNumbers/ReverseItNumbers/${Input}`);
    const data = await response.json();
    console.log(data[0])
    return data
}

// Magic 8 Ball
const magic8ball = async (Input) => {
    const response = await fetch(apiUrl + `/Magic8Ball/Magic8Ball/` + Input);
    const data = await response.text();
    console.log(data)
    return data
}

// Great or Less
const greaterOrLess = async (Input, InputTwo) => {
    const response = await fetch(apiUrl + `/GreaterOrLess/GreaterOrLess/${Input}/${InputTwo}`)
    const data = await response.text();
    console.log(data)
    return data;
}

// Resaurant Picker
const resaurantPickerChinese = async () => {
    let Input = "Chinese"
    const response = await fetch(apiUrl + `/RestaurantPicker/RestaurantPicker/` + Input)
    const data = await response.text();
    console.log(data)
    return data;
}

const resaurantPickerFastFood = async () => {
    let Input = "Fast Food"
    const response = await fetch(apiUrl + `/RestaurantPicker/RestaurantPicker/` + Input)
    const data = await response.text();
    console.log(data)
    return data;
}

const resaurantPickerMexican = async () => {
    let Input = "Mexican"
    const response = await fetch(apiUrl + `/RestaurantPicker/RestaurantPicker/` + Input)
    const data = await response.text();
    console.log(data)
    return data;
}
export { add2Nums, sayHello, askingQuestions, madlibs, oddOrEven, reverseItAlphanumeric, reverseItNumbers, magic8ball, greaterOrLess, resaurantPickerChinese, resaurantPickerFastFood, resaurantPickerMexican}