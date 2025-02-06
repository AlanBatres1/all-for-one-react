const apiUrl = "https://allforonealan.azurewebsites.net"

// Say Hello
const sayHello = async (Name) => {
    const response = await fetch(apiUrl +`/SayHello/SayHello/${Name}`);
    const data = await response.text()
    console.log(data)
    return data;
}

// Adding Numbers
const add2Nums = async (Input, Input2) => {
    try {
        const response = await fetch(apiUrl + `/Add2Nums/AddNumbers/${Input}/${Input2}`);
        const data = await response.text();
        console.log('add2Nums:', data)
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

// Asking Questions
const askingQuestions = async (userName, time) => {
    const response = await fetch(apiUrl +`/AskingQuestions/AskingQuestions/${userName}/${time}`);
    const data = response.json();
    console.log(data);
    return data;
}

// Madlibs 
const madlibs = async(Input, InputTwo, InputThree, InputFour, InputFive, InputSix, InputSeven, InputEight, InputNine, InputTen) =>{
    const response = await fetch(apiUrl + `/MadLib/MadLib/${Input}/${InputTwo}/${InputThree}/${InputFour}/${InputFive}/${InputSix}/${InputSeven}/${InputEight}/${InputNine}/${InputTen}`);
    const data = await response.text();
    console.log(data);
    return data;
}

// Odd or Even
const oddOrEven = async(Input) =>{
    const response = await fetch(apiUrl + `/OddOrEven/OddOrEven/` + Input);
    const data = await response.text();
    console.log(data)
    return data;
}

// Reverse it Alphanumeric
const reverseItAlphanumeric = async (Input) =>{
    const response = await fetch(apiUrl + `/ReverseItAlphanumeric/ReverseItAlphanumeric/${Input}`);
    const data = await response.json();
    console.log(data[0])
    return data
}

// Reverse it Numbers
const reverseItNumbers = async (Input) =>{
    const response = await fetch(apiUrl + `/ReverseItNumbers/ReverseItNumbers/${Input}`);
    const data = await response.json();
    console.log(data[0])
    return data
}
export { add2Nums, sayHello, askingQuestions, madlibs, oddOrEven, reverseItAlphanumeric, reverseItNumbers}