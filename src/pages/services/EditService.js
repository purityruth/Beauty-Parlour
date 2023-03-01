import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { useNavigate, useParams , Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import AdminNavbar from "../admincomponents/AdminNavbar";
import AdminSideNav from "../admincomponents/AdminSideNav";

export default function EditService() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [servicename, setServiceName] = useState("")
  const [description, setDescription] = useState("")
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchService()
  },[])

  const fetchService = async () => {
    await axios.get(`http://localhost:8000/api/service/${id}`).then(({data})=>{
      const { servicename, description } = data.product
      setServiceName(servicename)
      setDescription(description)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const updateService = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('_method', 'PATCH');
    formData.append('servicename', servicename)
    formData.append('description', description)
    
    await axios.post(`http://localhost:8000/api/service/${id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/adminstaff/ListServices")
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
      <div className="container">
        <div className="content-header">
          <div className="container-fluid">
              <div className="row mb-2">
              <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Edit Service</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link className='nav-link pt-0' to={"/admincomponents/AdminLanding"}> Home</Link>
                  </li>
                  <li className="breadcrumb-item active">EditService </li>
                  </ol>
              </div>{/* /.col */}
              </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Update Service</h4>
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
                  <Form onSubmit={updateService}>
                    <Row> 
                        <Col>
                          <Form.Group controlId="ServiceName">
                              <Form.Label>Service Name</Form.Label>
                              <Form.Control type="text" value={servicename} onChange={(event)=>{
                                setServiceName(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col>  
                    </Row>
                    <Row> 
                        <Col>
                          <Form.Group controlId="Description">
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="textarea" value={description} onChange={(event)=>{
                                setDescription(event.target.value)
                              }}/>
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
    </div>
  )
}