import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link,Redirect } from 'react-router-dom';

const Myprofile = () => {
    const [data,setData] = useState (null);
    const [review,setReview] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/myprofile',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => setData(res.data))

        axios.get('http://localhost:5000/myreview',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(response => setReview(response.data))

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
            
                
                <Link to="/dashboard" className="btn btn-secondary" style={{"marginLeft":"990px"}} >All Profiles</Link>&nbsp;&nbsp;
                <Link to="/login" className="btn btn-secondary" onClick={() => localStorage.removeItem('token')} >Logout</Link>&nbsp;
                
            </nav>

            {data &&
            <div className="profile bg-light card " style={{"margin":"10px"}}>
                <center>
                        <img 
                            className="round-img"
                            src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                            height="250" width="450"
                            alt="user photo"
                        />
                        <div>
                            <h2 style={{"color":"springgreen"}}>{data.fullname}</h2>
                            <p>{data.email}</p>
                            <p>{data.mobile}</p>
                            <p>India</p>
                            <h4><u>Skills</u>:-</h4>
                        </div>

                        <ul>
                            {data.skill.split(",").map(skills => {
                                return <li className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px" }}>{skills}</li>;
                            }
                                )}
                            
                        </ul>

                        <div className="card" style={{"width":"50rem"}}><br />
                            <h2 style={{"color":"palevioletred"}}><u>Reviews and Ratings</u>:-</h2><br />

                            {review.length>1 ?
                                review.map(review =>
                                    <center>
                                        <div className="card" style={{"width":"30rem",textAlign:"center"}}>
                                            <h4>{review.taskprovider}</h4>
                                            <p>{review.rating}/5</p>
                                        </div>
                                        <br />
                                    </center>
                                    )
                            :
                                <p>No Review added yet</p>
                            }
                            
                        </div><br />
                </center>
            </div>
            }
        </div>
    )
}

export default Myprofile
