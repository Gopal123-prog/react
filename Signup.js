import React from 'react'
import App from './App.css'
import { useState } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';


const Signup = () => {
    const [signdata,setSigndata] = useState({
        mail:'',
        username:'',
        password:''
    })
    const {mail,username,password} = signdata;
    const Signuphandler = (e) =>{
        setSigndata({...signdata,[e.target.name]:e.target.value})
    }
    const [getdata,setGetdata] = useState([]);
    const Postdata = () => {
        axios.get('').then(
            response => setGetdata(response.data)
        )
    }
    
  return (
    <div id='signup'>
        <form method="post" autoComplete='off'>
        <center>
        <input type="mail" name='mail' value={mail} placeholder='mail' onChange={Signuphandler}></input><br/><br/>
           <input type="text" name='username' value={username} placeholder='username' onChange={Signuphandler}></input><br/><br/>
           <input type="password" name='password' value={password} placeholder='password' onChange={Signuphandler}></input><br/><br/>
           <button>signup</button>
        </center>
      </form>
      
    </div>
  )
}

export default Signup
