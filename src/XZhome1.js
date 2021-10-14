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
            <Link to="/register" className="btn btn-secondary" style={{textAlign:"right"}}>Register</Link>&nbsp;&nbsp;
            <Link to="/login" className="btn btn-secondary" style={{"margin":"0"}}>Login</Link>&nbsp;&nbsp;
            
        </nav>
        <section className="landing" style={{"marginTop":"170px"}}>
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Developers Hub</h1>
                    <p className="lead">
                    create a developers profile .share posts
                    </p>
                </div>
            </div>
            <div className="button">
                <Link to='/register' className="btn btn-primary">Signup</Link>&nbsp;&nbsp;&nbsp;
                <Link to='/login' className="btn btn-success">SignIn</Link>
            </div>
        </section>
        </center>
        </div>
        
    )
}

export default Home
