import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import AdminNavbar from "../admincomponents/AdminNavbar";
import AdminSideNav from "../admincomponents/AdminSideNav";

export default function AddMessage() {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")
  const [validationError,setValidationError] = useState({})

  
  const AddMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('name', name)
    formData.append('email', email)
    formData.append('subject', subject)
    formData.append('description', description)
    

    await axios.post(`http://localhost:8000/api/adminMessage`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/adminmessage/ListMessage")
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
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
              <div className="row mb-2">
              <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Add Staff</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link className='nav-link pt-0' to={"/admincomponents/AdminLanding"}> Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Add Message </li>
                  </ol>
              </div>{/* /.col */}
              </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card pt-10">
              <div className = "card-header">
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
              </div>
              <div className="card-body">
                
                  <Form onSubmit={AddMessage}>
                    <div className = "form-group mb-3">
                      <Row> 
                          <Col>
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={(event)=>{
                                  setName(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                        </Row>
                    </div>
                    
                    <div className = "form-group mb-3">
                      <Row> 
                          <Col>
                            <Form.Group controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" value={email} onChange={(event)=>{
                                  setEmail(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                    </div>

                    <div className = "form-group mb-3">
                      <Row> 
                          <Col>
                            <Form.Group controlId="Subject">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control type="text" value={subject} onChange={(event)=>{
                                  setSubject(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                    </div>

                    <div className = "form-group mb-3">
                      <Row className="my-3">
                          <Col>
                            <Form.Group controlId="Message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={2} value={description} onChange={(event)=>{
                                  setDescription(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>
                      </Row>
                    </div>

                    <div className = "form-group mb-3">
                      <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
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