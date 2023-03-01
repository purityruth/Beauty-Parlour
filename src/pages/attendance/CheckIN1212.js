import React, { useState, useEffect } from "react";


import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams, Link} from 'react-router-dom'
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CheckIN1212() {

    const [adminStaff, setStaff] = useState([]);
    const [startDate, setStartDate] = useState("");

    useEffect(()=>{
        fetchAdminStaff() 
    },[])

    const fetchAdminStaff = async () => {
        await axios.get(`http://localhost:8000/api/adminStaff`).then(({data})=>{
            setStaff(data)
        })
    }
    const navigate = useNavigate();
    const [name, setName]=useState();
    const checkIn=()=>{
        alert(name);
    }
    
    

  return (
      
    <div>
        <div className="container">
            <section className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0 text-center">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date and Time</th>
                                            <th>Check In </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(
                                            ()=>{
                                                if(adminStaff.length>0){
                                                    
                                                    adminStaff.map((staff)=>{
                                                        console.log(adminStaff)
                                                        
                                                       
                                                    })
                                                    return(
                                                            
                                                        <tr >
                                                        
                                                        
                                                        </tr>
                                                    )
                                                
                                                    
                                                }
                                            }
                                        )()}
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>

  );
}

export default CheckIN1212;