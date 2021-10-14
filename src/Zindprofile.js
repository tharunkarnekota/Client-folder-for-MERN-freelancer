//just for my reference, main file is Indprofile.js

import React,{useState} from 'react'
import { Link,Redirect } from 'react-router-dom';
import axios from 'axios';

const Indprofile = ({match}) => {
    const [rating,setRating] = useState(null);
    const [taskprovider,setTaskprovider] = useState(null);

    const submitHandler = e =>{
        axios.get('http://localhost:5000/myprofile',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setTaskprovider(res.data.fullname))

        let review = {
            taskprovider,
            taskworker:match.params.id,
            rating,
        }
        axios.post('http://localhost:5000/addreview',review,{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => alert(res.data))
    }

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
                <Link to="/dashboard" className="btn btn-secondary" >All Profiles</Link>&nbsp;&nbsp;
                <Link to="/login" className="btn btn-secondary" onClick={() => localStorage.removeItem('token')} >Logout</Link>&nbsp;
                
            </nav>

            <div className="profile bg-light card " style={{"margin":"10px"}}>
                <center>
                        <img 
                            className="round-img"
                            src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                            height="250" width="450"
                            alt=""
                        />
                        <div>
                            <h2>{match.params.fullname}</h2>
                            <p>{match.params.email}</p>
                            <p>{match.params.mobile}</p>
                            <p>India</p>
                            <h4><u>Skills</u>:-</h4>

                            <ul>
                                {match.params.skill.split(",").map(skills => {
                                    return <li className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px" }}>{skills}</li>;
                                }
                                    )}
                                
                            </ul>

                            <center>
                                        <div className="  card" style={{"width":"30rem",textAlign:"center"}}><br />
                                            <h4>Enter Your Review:</h4>
                                            <form onSubmit={submitHandler}>
                                                <input size="50" type="text" onChange={e => setRating(e.target.value)} placeholder="Enter your rating out of 5" /><br /><br />
                                                <input type="submit" className="btn btn-primary" value="Add Rating" /><br /><br />
                                            </form>
                                        </div>
                                        <br />
                            </center>
                        </div>
                </center>
            </div>

           
        </div>
    )
}

export default Indprofile
