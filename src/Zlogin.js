//just for my reference, main file is login.js

import React,{useState} from 'react'
import { Link,Redirect } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [auth,setAuth] = useState(false)
    const [data,seData] = useState({
        email : '',
        password : '',
    })
    const {email,password} = data
    const changeHandler = e =>{
        seData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
                                                            //    res => console.log(res.data)       to check before saving token in local storage
                                                            //2    res => localStorage.setItem('token',res.data.token)
        res => {localStorage.setItem('token',res.data.token);setAuth(true)}
        )
    }
                                                                                //2 if(localStorage.getItem('token')){
                                                                                //2     return <Redirect to='/dashboard' />
                                                                                //2 }

    if(auth){
        return <Redirect to='/dashboard' />
    }

    return (
        <div>
            <nav className="navbar bg-dark">
                <h1 style={{"marginLeft":"5px"}}>
                    <Link to='/'>Developers Hub</Link>
                </h1>
            
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                <Link to="/register" className="btn btn-secondary" >Register</Link>&nbsp;&nbsp;
                <Link to="/login" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
            </nav>
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"100px"}} >Sign In</h1>
                <p className="lead"><b>Sign into Your Account</b></p>
                <form onSubmit={submitHandler}>
                    <input size="50" type="email"    placeholder="Enter email"    name="email" value={email}   onChange={changeHandler} /><br /><br />
                    <input size="50" type="password" placeholder="Enter password" name="password" value={password} onChange={changeHandler} /><br /><br />
                    <input type="submit" className="btn btn-primary" value="login" />
                </form>
                <p>
                    Don't have any account? <Link to="/register">Sign Up</Link>
                </p>
            </section>
        </div>
    )
}

export default Login
