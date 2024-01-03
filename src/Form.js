import React from 'react'
import {useState,useEffect} from 'react'

export default function Form() {
    const data={name:"",email:"",password:""}
    const [inputData, setInputData]=useState(data)
    const [flag,setFlag]=useState(false)
    useEffect(()=>{
        console.log("registered")
    },[flag])

    
    function handleData(e){

        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name||!inputData.email||!inputData.password)
        {
            alert("All fields are Mandatory")
        }
        else{
            setFlag(true)
        }
    }
  return (
    <>
    <pre>{(flag)? <h2>Hello {inputData.name}, you have succesfully Registered</h2>:" "}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type='text' placeholder="Enter Your Name" name="name" value={inputData.name} onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder="Enter Your Email" name="email" value={inputData.email} onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder="Enter Your Password" name="password" value={inputData.password} onChange={handleData}></input>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
    </>
  )
}
