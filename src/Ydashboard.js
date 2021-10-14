import React,{useState,useEffect} from 'react'
import { Link,Redirect } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    const [data,setData] = useState ([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/allprofiles',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => setData(res.data))
    },[])
    if(!localStorage.getItem('token')){
        return <Redirect to='/login' />
    }
    return (
        <div>
            <nav className="navbar bg-dark">
                <h1 style={{"marginLeft":"5px"}}>
                    <Link to='/dashboard'>Developers Hub</Link>
                </h1>
            
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                <Link to="/myprofile" className="btn btn-secondary" style={{textAlign:"right"}}>My Profile</Link>&nbsp;&nbsp;
                <Link to="/login" className="btn btn-secondary" onClick={() => localStorage.removeItem('token')} style={{"margin":"0"}}>Logout</Link>&nbsp;&nbsp;
                
            </nav>
            <section className="container">
                <h1 className="large text-primary">Developers</h1>
                <p className="lead">
                    Browse and connect with developers
                </p>


                <div className="profiles ">

                    {data.length>1 ? 
                    data.map(profile => 
                        <div className="profile bg-light card " style={{"margin":"10px"}}>
                            <center>
                        <img 
                            className="round-img"
                            src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                            height="250" width="450"
                            alt=""
                        />
                        <div>
                            <h2 style={{"color":"green"}}>{profile.fullname}</h2>
                            <p>{profile.email}</p>
                            <p>{profile.mobile}</p>
                            <p>India</p>
                            <Link to={`/indprofile/${profile.fullname}/${profile.email}/${profile.mobile}/${profile.skill}/${profile._id}`} className="btn btn-primary">View Profile</Link>
                        </div>

                        <ul>
                            {profile.skill.split(",").map(skill => <li className="text-primary" style={{listStyleType:"none",marginLeft:"-30px"}}>{skill}</li>
                                )}
                            
                        </ul>
                        </center>
                    </div>
                        )
                    : null}
                    
                </div>


            </section>

        </div>
    )
}

export default Dashboard
