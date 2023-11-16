import React, { useState } from "react";


    // const myName = ['Ankit', 'Singh'];
    // const aboutMe = [...myName, 28, 'Male', 134, 'Web Designer', 'Developer'];

    // const [s, a, b, c, d, ...rest] = aboutMe;
    // console.log(`${s} ${a} ${b} ${c} ${d} ${rest[1]}`);

    // function calculate(a,b){
    //     let add = a+b;
    //     let substract = a-b;
    //     let multiply = a*b;
    //     let divide = a/b;
    //     return [add, substract, multiply, divide];
    // }

    // let [a, b, c, d] = calculate(6,5);
    // // b = calculate(10,2);

    // console.log('addition ans is:',a);
    // console.log('Subtract ans is:',b);
    // console.log('Multiply ans is:',c);
    // console.log('Divide ans is:',d);
    
  

    // console.log('My name is', ...myName, 'my age is', age, 'my employee id is', id,'my gender is', gender, 'my designation is', designation);
    
    // const myName = {
    //     fName : 'Ankit',
    //     lName : 'Singh'
    // }
    // const myBio = {
    //     ...myName,
    //     age : 28,
    //     gender : 'Male'
    // }
    // console.log(myName.fName)
    // console.log(myBio)
    // const {fName, lName, age, gender} = myBio;
    
    // console.log(fName, lName, age, gender);


const Form = () => {

    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");

    const changeValue = (event) =>{
        console.log(event.target.value)
        setName(event.target.value);
    }

    const submitFrom = (e) =>{
        e.preventDefault();
        setFullName(name);
    }

    return(
        <>
        <h1>{fullName}</h1>
        <form className="form_div" onSubmit={submitFrom}>
            <label>Name</label><br />
            <input type="text" placeholder="Enter your name" value={name} onChange={changeValue} /><br />
            <button className="form_btn" type="submit">Submit</button>
        </form>
        </>
    );
}

export default Form;