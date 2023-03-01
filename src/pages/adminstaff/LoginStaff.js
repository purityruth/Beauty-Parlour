import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import{ Nav, Navbar, Container, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function LoginStaff() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validationError,setValidationError] = useState({})

  const LoginStaff = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('email', email)
    formData.append('password', password)
    

    await axios.post(`http://localhost:8000/api/loginCustomer`, formData).then(({data})=>{
      const loginStatus = 'Log in Successful' ;
      //alert(data)
     
      
      if(loginStatus===data.message){
        JSON.stringify(localStorage.setItem('user', data))
        Swal.fire({
          title:'Success',
          text:data.message,
          icon:'success'
        })
        navigate('/stylistpages/StylistHome')
        console.log('response', data);
      }else{
        Swal.fire({
          title:'failed',
          text:data,
          icon:"error",
          
        })
      
      }
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
      <div className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                <h1 style={{ display: 'block', textAlign: 'center', color: '#7b1fa2', paddingTop: '20px'}}> Staff Login</h1>
            </div>{/* /.col */}
            <div className="col-sm-4">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link className='nav-link pt-0' to={"/admincustomer/LoginCustomer"} style={{textAlign: 'center', color: '#7b1fa2', fontSize:'20px'}} > User</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className='nav-link pt-0' to={"/admincomponents/LoginAdmin"} style={{textAlign: 'center', color: '#7b1fa2', fontSize:'20px'}} > Admin</Link>
                </li>
                </ol>
            </div>{/* /.col */}
            </div>{/* /.row */}
        </div>{/* /.container-fluid */}
      </div>
    
      <div className="container" style={{paddingTop: '50px'}}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card" style={{backgroundColor: '#fff'}} >
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
                
                  <Form onSubmit={LoginStaff}>
                    
                    <div className = "form-group mb-2">
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

                    <div className = "form-group mb-2">
                      <Row> 
                          <Col>
                            <Form.Group controlId="Password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(event)=>{
                                setPassword(event.target.value)
                                }} />
                            </Form.Group>
                          </Col>  
                      </Row>
                    </div>

                    <div className = "form-group mb-3" style={{display: 'block', textAlign: 'center', color: '#7b1fa2', paddingTop: '20px'}} >
                      <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                        Sign In
                      </Button>
                    </div>
                  </Form>
                  
                  <Link className='nav-link' to={"/stylistpages/StylistSignup" } style={{textAlign: 'center', color: '#7b1fa2'}} > Create New Account </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




