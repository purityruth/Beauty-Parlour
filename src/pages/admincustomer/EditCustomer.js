import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditUser() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState(null)
  const [password, setPassword] = useState("")
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchAdminCustomer()
  },[])

  const fetchAdminCustomer = async () => {
    await axios.get(`http://localhost:8000/api/adminCustomer/${id}`).then(({data})=>{
      const { firstname, lastname, username, email, phoneno, gender, age, password } = data.product
      setFirstName(firstname)
      setLastName(lastname)
      setUserName(username)
      setEmail(email)
      setGender(gender)
      setAge(age)
      setPhoneno(phoneno)
      setPassword(password)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const changeHandler = (event) => {
		setPassword(event.target.files[0]);
	};

  const updateCustomer = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('_method', 'PATCH');
    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('username', username)
    formData.append('email', email)
    formData.append('gender', gender)
    formData.append('age', age)
    formData.append('phoneno', phoneno)
    formData.append('password', password)
    
    await axios.post(`http://localhost:8000/api/adminCustomer/${id}`, formData).then(({data})=>{
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
    <div className="container">
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
                <Form onSubmit={updateCustomer}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="FirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={firstname} onChange={(event)=>{
                              setFirstName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="LastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={lastname} onChange={(event)=>{
                              setLastName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="UserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" value={username} onChange={(event)=>{
                              setUserName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
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
                  <Row> 
                      <Col>
                        <Form.Group controlId="Gender">
                          <Form.Label>Gender</Form.Label>
                          {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-2" value={gender} onChange={(event)=>{
                              setGender(event.target.value)
                            }}>
                              <Form.Check inline label="Female" name="group1" type={type} id={`inline-${type}-1`} />
                              <Form.Check inline label="Male" name="group1" type={type} id={`inline-${type}-2`} />
                              <Form.Check inline label="Other" name="group1" type={type} id={`inline-${type}-3`} />
                            </div>
                          ))}
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="18" value={age} onChange={(event)=>{
                              setAge(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Phoneno">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type="text" value={phoneno} onChange={(event)=>{
                              setPhoneno(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}