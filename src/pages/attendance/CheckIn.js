import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import {Col, Modal} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import AdminNavbar from "../admincomponents/AdminNavbar";
import AdminSideNav from "../admincomponents/AdminSideNav";

export default function BookAppointment() {
  const navigate = useNavigate();

  const [adminStaff, setStaff] = useState([])

    useEffect(()=>{
        fetchAdminStaff() 
    },[])

    const fetchAdminStaff = async () => {
        await axios.get(`http://localhost:8000/api/adminStaff`).then(({data})=>{
            setStaff(data)
        })
  }



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const [id, setId] = useState('');
  const [startDate, setStartDate] = useState('');

  

  const [validationError,setValidationError] = useState({})

  const handle = () => {
    localStorage.setItem('Id', id);
    localStorage.setItem('Date', startDate);
  };
  const remove = () => {
    localStorage.removeItem('Id');
    localStorage.removeItem('Date');
  };


  const CheckIn = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('id', id)
    formData.append('startDate', startDate)

    await axios.post(`http://localhost:8000/api/attendance`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })

    //const [startDate, setStartDate] = useState(new Date());
  }

  return (
    <div>

      <div className="content-wrapper">

        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className = "card-header">
                <div className="form-wrapper">
                  {
                    Object.keys(validationError).length > 0 && (
                      <div className="row">
                        <div className="col-12">
                          <div className="alert alert-danger">
                            <ul className="mb-0">
                              {
                                Object.entries(validationError).map(([key, value])=>(
                                  <li key={key}>{value}</li>   
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  }
              </div>

              <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date and Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    adminStaff.length > 0 && (
                                        adminStaff.map((row, key)=>(
                                            <tr key={key}>
                                                <td>
                                                 {row.id} {row.lastname}</td>
                                              
                                                <td>
                                                  
                                                  <DatePicker className="w-100 p-1"
                                                  selected={startDate} 
                                                  onChange={date =>  
                                                    setStartDate(date)} 
                                                  dateFormat='dd/MM/yyyy'
                                                  minDate={new Date()}
                                                  />
                                                    
                                                </td>
                                                <td>
                                                  <Button variant="danger" onClick={handle}>
                                                      Check In
                                                  </Button>
                                              </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="card-body">
                
                <Form onSubmit={CheckIn}>
                    <div className = "form-group mb-4">
                    <Row> 
                        <Col>
                          <Form.Group controlId="Name">
                              <Form.Label>Your Name</Form.Label>
                              <Form.Control type="text" value={id} onChange={(event)=>{
                                setId(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col> 
                        
                        <Col>
                          <Form.Group controlId="Name">
                              <Form.Label>Your Name</Form.Label>
                              <Form.Control type="text" value={startDate} onChange={(event)=>{
                                setStartDate(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col> 
                        
                      </Row>
                  </div>

                  <div className = "form-group mb-4 ">
                    <Button variant="primary" className="mt-3" size="lg" block="block" type="submit">
                      Confirm CheckIn
                    </Button>
                  </div>
                </Form>
                {localStorage.getItem('Name') && (
                  <div>
                     Name: <p>{localStorage.getItem('Id')}</p>
                  </div>
               )}
               {localStorage.getItem('Date') && (
                  <div>
                     Date: <p>{localStorage.getItem('Date')}</p>
                  </div>
               )}
              </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary">Understood</Button>
                </Modal.Footer>
              </Modal>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}









