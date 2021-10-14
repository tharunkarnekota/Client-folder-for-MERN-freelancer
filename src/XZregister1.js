//just for my reference, main file is register.js

import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [data,seData] = useState({
        fullname : '',
        email : '',
        mobile : '',
        skill : '',
        password : '',
        confirmpassword : ''
    })
    const {fullname,email,mobile,skill,password,confirmpassword} = data
    const changeHandler = e =>{
        seData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
    }

    return (
        <div>
            <nav className="navbar bg-dark">
            <h1 style={{"marginLeft":"5px"}}>
                <Link to='/'>Developers Hub</Link>
            </h1>
        
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            <Link to="/register" className="btn btn-secondary" style={{textAlign:"right"}}>Register</Link>&nbsp;&nbsp;
            <Link to="/login" className="btn btn-secondary" style={{"margin":"0"}}>Login</Link>&nbsp;&nbsp;
            
        </nav>
            <section className="container">
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><b> Create your Account</b></p>
                <form onSubmit={submitHandler}>
                    <input size="50" type="text"             placeholder="Name"            onChange={changeHandler} name="fullname" /><br /><br />
                    <input size="50" type="email"            placeholder="Email Address"   onChange={changeHandler} name="email" /><br /><br />
                    <input size="50" type="text"             placeholder="mobile"          onChange={changeHandler} name="mobile" /><br /><br />
                    <small>seperate skills by comma ( , )</small><br />
                    <input size="50" type="text"             placeholder="skill"            onChange={changeHandler} name="skill" /><br /><br />
                    <input size="50" type="password"         placeholder="password"         onChange={changeHandler} name="password" /><br /><br />
                    <input size="50" type="confirmpassword"  placeholder="confirm password" onChange={changeHandler} name="confirmpassword" /><br /><br />

                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
                <p>
                    Already have an Account? <Link to="/login">Sign in</Link>
                </p>
            </section>
        </div>
    )
}

export default Register
