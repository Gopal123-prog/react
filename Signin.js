import React from 'react'
import App from './App.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const Signin = () => {
    const [data,setData] = useState({
        username:'',
        password:''
    })
    const {username,password} = data;
    const Signinhandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <form id='signin' autoComplete='off'>
        <center>
           <input type="text" name='username' value={username} placeholder='username' onChange={Signinhandler}></input><br/><br/>
           <input type="password" name='password' value={password} placeholder='password' onChange={Signinhandler}></input><br/><br/>
          <button>signin</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/signup'>Signup</Link>
        </center>
      </form>
    </div>
  )
}

export default Signin
