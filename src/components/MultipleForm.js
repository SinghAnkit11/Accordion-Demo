import React, { useState } from "react";

const MultiForm = () =>{

    const [inputs, setInputs] = useState({});
    const [fullName, setFullName] = useState("");

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const submitData = (e) =>{
        e.preventDefault();
        setFullName(inputs);
    }
    return (
        <>
        <form className="my_form" onSubmit={submitData}>
            <div className="form_row">
                <label htmlFor="fname">First Name</label><br />
                <input type="text" name="fname" value={inputs.fname || ''} placeholder="Enter First Name" onChange={handleChange} required /><br />
            </div>
            <div className="form_row">
                <label htmlFor="lname">Last Name</label><br />
                <input type="text" name="lname" value={inputs.lname || ''} placeholder="Enter Last Name" onChange={handleChange} required /><br />
            </div>
            <div className="form_row">
                <label htmlFor="email">Email Address</label><br />
                <input type="email" name="email" value={inputs.email || ''} placeholder="Enter your Email" onChange={handleChange} required /><br />
            </div>
            <div className="form_row">
                <button type="submit">Submit</button>
            </div>
        </form>
        <div className="form_data">
            <p>First Name is <b>{fullName.fname}</b></p>
            <p>Last Name is <b>{fullName.lname}</b></p>
            <p>Email is <b>{fullName.email}</b></p>
        </div>
        </>
    );
}

export default MultiForm;