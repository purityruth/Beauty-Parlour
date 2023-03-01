import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import {Button, SplitButton, InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import AdminNavbar from "../admincomponents/AdminNavbar";
import AdminSideNav from "../admincomponents/AdminSideNav";

export default function EditAppointment() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [name, setName] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [email, setEmail] = useState("")
  const [startDate, setStartDate] = useState("");  
  const [service, setService] = useState(null)
  const [expert, setExpert] = useState("")
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchAppointment()
  },[])

  const fetchAppointment = async () => {
    await axios.get(`http://localhost:8000/api/appointments/${id}`).then(({data})=>{
      const { name, phoneno, email, date, service, expert } = data.product
     
      setName(name)
      setPhoneno(phoneno)
      setEmail(email)
      setStartDate(startDate)
      setService(service)
      setExpert(expert)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const updateAppointment = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('_method', 'PATCH');
    formData.append('name', name)
    formData.append('phoneno', phoneno)
    formData.append('email', email)
    formData.append('date', startDate)
    formData.append('service', service)
    formData.append('expert', expert)
    
    await axios.post(`http://localhost:8000/api/appointments/${id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/appointments/ListAppointment")
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
  }

  return (
    <div>

      <AdminNavbar />
      <AdminSideNav />

      <div className="content-wrapper">

        <div className="content-header">
          <div className="container-fluid">
              <div className="row mb-2">
              <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Edit Appointment</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                  <Link className='nav-link pt-0' to={"/admincomponents/AdminLanding"}> Home</Link>
                  </li>
                  <li className="breadcrumb-item active">EditAppointments </li>
                  </ol>
              </div>{/* /.col */}
              </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Update Customer</h4>
                <hr />
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
                  <Form onSubmit={updateAppointment}>
                      <div className = "form-group mb-4">
                      <Row> 
                          <Col>
                            <Form.Group controlId="Name">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={(event)=>{
                                  setName(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col> 
                          
                          <Col>
                            <Form.Group controlId="Phoneno">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control type="text" value={phoneno} onChange={(event)=>{
                                  setPhoneno(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>

                        </Row>
                    </div>
                    
                    <div className = "form-group mb-4">
                      <Row> 
                          <Col>
                            <Form.Group controlId="Email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="text" value={email}  onChange={(event)=>{
                                  setEmail(event.target.value)
                                }} />
                            </Form.Group>
                          </Col> 
                          
                          <Col>
                            <Form.Group controlId="Date">
                                <Form.Label>Date and Time</Form.Label>
                                <DatePicker className="w-100 p-1"
                                selected={startDate} 
                                onChange={date =>  
                                  setStartDate(date)} 
                                dateFormat='dd/MM/yyyy'
                                minDate={new Date()}
                                /> 
                                
                                
                            </Form.Group>
                          </Col> 

                        </Row>
                    </div>
                    
                    <div className = "form-group mb-4">
                      <Row> 
                        <Col>
                          <Form.Group controlId="Service">
                              <Form.Label>Service</Form.Label>
                              <Form.Select aria-label="Default select example" value={service} onChange={(event)=>{
                                setService(event.target.value)
                              }}>
                                <option>Service</option>
                                <option value="Hair Care">Hair Care</option>
                                <option value="Facials">Facials</option>
                                <option value="Make up">Make up</option>
                                <option value="Nail Care">Nail Care</option>
                                <option value="Eye Care">Eye Care</option>
                                <option value="Waxing">Waxing</option>
                              </Form.Select>
                          </Form.Group>
                        </Col>  

                        <Col>
                          <Form.Group controlId="Expert">
                              <Form.Label>Beauty Expert</Form.Label>
                              <Form.Select aria-label="Default select example" value={expert} onChange={(event)=>{
                                setExpert(event.target.value)
                              }}>
                                <option>Beauty Expert</option>
                                <option value="Rozen Sophie">Rozen Sophie</option>
                                <option value="Jane Hilton">Jane Hilton</option>
                                <option value="Mark Dew">Mark Dew</option>
                                <option value="Alex Jean">Alex Jean</option>
                                <option value="Amos Wetangula">Amos Wetangula</option>
                              </Form.Select>
                          </Form.Group>
                        </Col>  

                      </Row>
                    </div>

                    <div className = "form-group mb-4 ">
                      <Button variant="primary" className="mt-3" size="lg" block="block" type="submit">
                        Save
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}