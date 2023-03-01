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

export default function AddStaff() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()
  const [password, setPassword] = useState("")
  const [validationError,setValidationError] = useState({})

  const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

  const AddStaff = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('email', email)
    formData.append('phoneno', phoneno)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('password', password)
    

    await axios.post(`http://localhost:8000/api/adminStaff`, formData).then(({data})=>{
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
  }

  return (
    <div>

      <div className="container" style={{paddingTop: '50px'}}>
        
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card pt-10">
              <div className = "card-header">
              <h2 className="card-title" style={{fontWeight: 'bold', fontSize: '40px', color: '#7b1fa2'}}> Sign Up</h2>
              <br />
              <br />
              <br />
              <h5 className="card-title" style={{fontWeight: 'normal', fontSize: '18px'}}> Its quick and easy</h5>
              <br />
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
                
                  <Form onSubmit={AddStaff}>
                    <div className = "form-group mb-3">
                      <Row> 
                            <Col>
                                <Form.Group controlId="FirstName">
                                    <Form.Control type="text" placeholder="First Name" value={firstname} onChange={(event)=>{
                                    setFirstName(event.target.value)
                                    }}/>
                                </Form.Group>
                            </Col>  

                            <Col>
                                <Form.Group controlId="LastName">
                                    <Form.Control type="text" placeholder="Last Name" value={lastname} onChange={(event)=>{
                                    setLastName(event.target.value)
                                    }}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                    
                    <div className = "form-group mb-3">
                        <Row> 
                            <Col>
                                <Form.Group controlId="Email">
                                    <Form.Control type="text" placeholder="Email" value={email} onChange={(event)=>{
                                    setEmail(event.target.value)
                                    }}/>
                                </Form.Group>
                            </Col> 
                            
                            <Col>
                                <Form.Group controlId="Phone no">
                                    <Form.Control type="text" placeholder="Phone No" value={phoneno} onChange={(event)=>{
                                    setPhoneno(event.target.value)
                                    }}/>
                                </Form.Group>
                            </Col> 
                        </Row>
                    </div>

                    <div className = "form-group mb-3">
                      <Row className="my-3">
                          <Col>
                            <Form.Group controlId="Description">
                                <Form.Control as="textarea" rows={2} placeholder="Description" value={description} onChange={(event)=>{
                                  setDescription(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>
                      </Row>
                    </div>

                    <div className = "form-group mb-3">
                      <Row>
                        <Col>
                          <Form.Group controlId="Image" className="mb-3">
                            <Form.Control type="file" onChange={changeHandler} />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>

                    <div className = "form-group mb-3">
                      <Row> 
                          <Col>
                            <Form.Group controlId="Password">                                <Form.Control type="password" placeholder="Password" value={password} onChange={(event)=>{
                                  setPassword(event.target.value)
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