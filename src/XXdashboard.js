import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <nav className="navbar bg-dark">
                <h1 style={{"marginLeft":"5px"}}>
                    <Link to='/'>Developers Hub</Link>
                </h1>
            
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                <Link to="/myprofile" className="btn btn-secondary" style={{textAlign:"right"}}>My Profile</Link>&nbsp;&nbsp;
                <Link to="/login" className="btn btn-secondary" style={{"margin":"0"}}>Logout</Link>&nbsp;&nbsp;
                
            </nav>
            <section className="container">
                <h1 className="large text-primary">Developers</h1>
                <p className="lead">
                    Browse and connect with developers
                </p>
                <div className="profiles">
                    <div className="profit bg-light">
                        <img 
                            className="round-img"
                            src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                            height="250" 
                            alt=""
                        />
                        <div>
                            <h2>john Doe</h2>
                            <p>Developer at microsoft</p>
                            <p>hyderbad,telangana</p>
                            <Link to="profile.html" className="btn btn-primary">View Profile</Link>
                        </div>

                        <ul>
                            <li className="text-primary">Html</li>
                            <li className="text-primary">css</li>
                            <li className="text-primary">javascript</li>
                            <li className="text-primary">python</li>
                            <li className="text-primary">c#</li>
                        </ul>
                    </div>

                    <div className="profit bg-light">
                        <img 
                            className="round-img"
                            src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                            height="250" 
                            alt=""
                        />
                        <div>
                            <h2>ram Doe</h2>
                            <p>Developer at microsoft</p>
                            <p>hyderbad,telangana</p>
                            <Link to="profile.html" className="btn btn-primary">View Profile</Link>
                        </div>

                        <ul>
                            <li className="text-primary">java</li>
                            <li className="text-primary">php</li>
                            <li className="text-primary">javascript</li>
                            <li className="text-primary">python</li>
                            <li className="text-primary">c#</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Dashboard
