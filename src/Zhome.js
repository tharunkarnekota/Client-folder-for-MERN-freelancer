//just for my reference, main file is home.js

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <center>
        
        <nav className="navbar bg-dark">
            <h1 style={{"marginLeft":"5px"}}>
                <Link to='/'>Developers Hub</Link>
            </h1>
        
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            <Link to="/register" className="btn btn-secondary">Register</Link>&nbsp;&nbsp;
            <Link to="/login" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
            
        </nav>
        <section  style={{"marginTop":"170px"}}>
            
                <h1 >Developers Hub</h1>
                <p >
                    create a developers profile .share posts
                </p>
                
                <Link to='/register' className="btn btn-primary">Signup</Link>&nbsp;&nbsp;&nbsp;
                <Link to='/login' className="btn btn-success">SignIn</Link>
            
        </section>
        </center>
        </div>
        
    )
}

export default Home
