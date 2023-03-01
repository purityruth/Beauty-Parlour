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

export default function AddCustomer() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [password, setPassword] = useState("")
  const [validationError,setValidationError] = useState({})

  const AddCustomer = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('username', username)
    formData.append('email', email)
    formData.append('gender', gender)
    formData.append('age', age)
    formData.append('phoneno', phoneno)
    formData.append('password', password)
    

    await axios.post(`http://localhost:8000/api/adminCustomer`, formData).then(({data})=>{
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
  <div >

    <div className="container" style={{paddingTop: '50px'}}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card" style={{width: '500px'}}>
            <div className = "card-header">
              <h2 className="card-title" style={{fontWeight: 'bold', fontSize: '40px', color: '#7b1fa2'}}> Sign Up</h2>
              <br />
              <br />
              <br />
              <h5 className="card-title" style={{fontWeight: 'normal', fontSize: '18px'}}> Its quick and easy</h5>
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
            <div className="card-body" style={{paddingTop: '60px' }}>
              
                <Form onSubmit={AddCustomer}>
                    <div className = "form-group mb-2">
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
                  
                  
                  <div className = "form-group mb-2">
                    <Row> 
                        <Col>
                          <Form.Group controlId="UserName">
                              <Form.Control type="text" placeholder="User Name" value={username} onChange={(event)=>{
                                setUserName(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col>  

                        <Col>
                          <Form.Group controlId="Email">
                              <Form.Control type="text" placeholder="Email" value={email} onChange={(event)=>{
                                setEmail(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col> 
                      </Row>
                  </div>
                  
                  <div className = "form-group mb-2">
                    <Row> 
                        <Col>
                          <Form.Group controlId="Age">
                              <Form.Control type="number" placeholder="Age" value={age} onChange={(event)=>{
                                setAge(event.target.value)
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
                  
                  <div className = "form-group mb-2">
                    <Row> 
                        <Col>
                          <Form.Group controlId="Gender">
                              <Form.Label style={{fontSize: '15px', color: '#222', fontWeight: 'normal'}} >Gender</Form.Label>
                              <Col sm={10} value={gender} onChange={(event)=>{
                                setGender(event.target.value)
                              }}>
                                <Form.Check type="radio" label="Female" name="formGender" id="Female" />
                                <Form.Check type="radio" label="Male" name="formGender" id="Male" />
                                <Form.Check type="radio" label="Custom" name="formGender" id="Other" />
                              </Col>
                          </Form.Group>
                        </Col>  
                      </Row>
                  </div>
                  
                  
                  <div className = "form-group mb-2">
                    <Row> 
                        <Col>
                          <Form.Group controlId="Password">
                              <Form.Control type="password" placeholder="Password" value={password} onChange={(event)=>{
                              setPassword(event.target.value)
                              }} />
                          </Form.Group>
                        </Col>  
                    </Row>
                  </div>

                  <p style={{fontSize: '10px'}}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive an email notifications from us and can opt out at any time.</p>
                  <div className = "form-group mb-3" style={{display:'flex', justifyContent:'center' , textAlign: 'center' }}>
                    <Button variant="primary" className="mt-2" size="lg" block="block" type="submit" >
                      Sign Up
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

