import React, { useState, useEffect } from "react";


import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams, Link} from 'react-router-dom'
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Attendance() {

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
                                        {
                                            
                                            
                                            adminStaff.length > 0 && (

                                                adminStaff.map((row, key)=>(
                                                    
                                                    <tr key={key}>
                                                    
                                                        <td>{row.firstname} {row.lastname}</td>
                                                        <td>
                                                           

                                                        </td>
                                                        <td>
                                                        <Button variant="primary" >
                                                                    Check In
                                                                </Button>
                                                        </td>
                                                        <td>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                ))
                                            )
                                        }
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

export default Attendance



/*
<Modal show={show} onHide={handleClose} animation={false}>
                                                                <Modal.Header closeButton>
                                                                <Modal.Title>Check In</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <div className="row justify-content-center">
                                                                        <div className="col-12 col-sm-12">
                                                                            <div className="card">
                                                                                <div className = "card-header">
                                                                                    <form onSubmit={handleSubmit}>

                                                                                        <DatePicker
                                                                                            selected={checkin}
                                                                                            onChange={(date) => setCheckIn(date)}
                                                                                            timeInputLabel="Time:"
                                                                                            dateFormat="MM/dd/yyyy h:mm aa"
                                                                                            showTimeInput
                                                                                        />

                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                <Button variant="secondary" onClick={handleClose}>
                                                                    Close
                                                                </Button>
                                                                <Button variant="primary" onClick={handleChange}>
                                                                    Check In
                                                                </Button>
                                                                </Modal.Footer>
                                                            </Modal>
*/