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
      navigate("/adminstaff/ListStaff")
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
                  <li className="breadcrumb-item active">AddStaff </li>
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
                
                  <Form onSubmit={AddStaff}>
                    <div className = "form-group mb-3">
                      <Row> 
                          <Col>
                            <Form.Group controlId="FirstName">
                                <Form.Label>FirstName</Form.Label>
                                <Form.Control type="text" value={firstname} onChange={(event)=>{
                                  setFirstName(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                        </Row>
                    </div>
                    
                    <div className = "form-group mb-3">
                      <Row> 
                          <Col>
                            <Form.Group controlId="LastName">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control type="text" value={lastname} onChange={(event)=>{
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
                            <Form.Group controlId="Phone no">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control type="text" value={phoneno} onChange={(event)=>{
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
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={2} value={description} onChange={(event)=>{
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
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={changeHandler} />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>

                    <div className = "form-group mb-3">
                      <Row> 
                          <Col>
                            <Form.Group controlId="Password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(event)=>{
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