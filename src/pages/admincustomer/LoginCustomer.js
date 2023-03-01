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

export default function LoginCustomer() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validationError,setValidationError] = useState({})

  const LoginCustomer = async (e) => {
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
        navigate('/clientpages/clientHome')
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
        <div className="container">
            <div className="row mb-2">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
            <h1 style={{ display: 'block', textAlign: 'center', color: '#7b1fa2', paddingTop: '20px'}} >Login Page</h1>
            </div>
            <div className="col-sm-4">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link className='nav-link pt-0' to={"/adminstaff/LoginStaff"} style={{textAlign: 'center', color: '#7b1fa2', fontSize:'20px'}} > Staff</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className='nav-link pt-0' to={"/admincomponents/LoginAdmin"} style={{textAlign: 'center', color: '#7b1fa2', fontSize:'20px'}}> Admin</Link>
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
              <div className = "card-header" style={{paddingBottom: '20px' }}>
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
                
                  <Form onSubmit={LoginCustomer}>
                    
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

                    <div className = "form-group mb-3" style={{display: 'block', textAlign: 'center', color: '#7b1fa2', paddingTop: '20px'}}>
                      <Button size="lg" block="block" type="submit">
                        Sign In
                      </Button>
                    </div>
                  </Form>

                  <Link className='nav-link' to={"/clientpages/ClientSignup" } style={{textAlign: 'center', color: '#7b1fa2'}} > Create New Account </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}









/*import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


//import useEffect

function AddCustomer() {

    const initialValues = { username: "", email: "", phoneno: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        const res = await axios.post('http://127.0.0.1:8000/api/add-customer', formValues);
        
        if(res.data.formValues === 200) {
            console.log(res.data.message);
            //setInitialValues({ username: "", email: "", phoneno: "", password: "" });
        }
        alert('Form Submitted' + formValues.initialValues);
    };

    useEffect(() => {

        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

    },[formErrors])

    //Validating the form

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username) {
            errors.username = "Username is required";
        }
        if(!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if(!values.phoneno) {
            errors.phoneno = "Phone Number is required";
        }
        if(!values.password) {
            errors.password = "Password is required";
        } else if (values.password < 4 ) {
            errors.password = "Password must be 4 characters and above";
        } else if (values.password > 10 ) {
            errors.password = "Password must be less than 10 characters";
        }
        return errors;
    }

    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-md-6">
                    <div className = "card">
                        <div className = "card-header">
                            <h4>Add Customer
                                <Link to = {'/'} className = "btn btn-primary btn-sm float-end">Back</Link>
                            </h4>
                        </div>
                        <div className = "card-body">
                            
                            <form onSubmit= {handleSubmit} >
                                <div className = "form-group mb-3">
                                    <label>User Name</label>
                                    <input type="text" name="username" onChange={handleChange} value={formValues.username} className="form-control" /> 
                                </div>
                                <p>{formErrors.username}</p>
                                <div className = "form-group mb-3">
                                    <label>Email Address</label>
                                    <input type="email" name="email" onChange={handleChange} value={formValues.email} className="form-control" /> 
                                </div>
                                <p>{formErrors.email}</p>
                                <div className = "form-group mb-3">
                                    <label>Phone Number</label>
                                    <input type="text" name="phoneno" onChange={handleChange} value={formValues.phoneno} className="form-control" /> 
                                </div>
                                <p>{formErrors.phoneno}</p>
                                <div className = "form-group mb-3">
                                    <label>Password</label>
                                    <input type="password" name="password" onChange={handleChange} value={formValues.password} className="form-control" /> 
                                </div>
                                <p>{formErrors.password}</p>

                                <div className = "form-group mb-3">
                                    <button type="submit" className="btn btn-primary">Save Customer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



/*className AddCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            phoneno: '',
        }

        //this.handleInput = this.handleInput.bind(this);
        //this.saveCustomer = this.saveCustomer.bind(this);
    }
   
    /*handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } 
   

    handleInput(event) {
        console.log(e.target);
        const target = event.target;
        const value = target.type === 
    }

    saveCustomer(event) {
        alert('Form Submitted' + this.state.value);
        event.preventDefault();
    }

    /*saveCustomer = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/add-customer', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                firstname: '',
                lastname: '',
                username: '',
                email: '',
                phoneno: '',
            });
        }

    }*/

    /*render () {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6">
                        <div className = "card">
                            <div className = "card-header">
                                <h4>Add Customer
                                    <Link to = {'add-customer'} className = "btn btn-primary btn-sm float-end">Add Customer</Link>
                                </h4>
                            </div>
                            <div className = "card-body">
                                
                                <form onSubmit={this.saveCustomer}>
                                    <div className = "form-group mb-3">
                                        <label>First Name</label>
                                        <input type="text" name="" onChange={this.handleInput} value={this.state.firstname} className="form-control" /> 
                                    </div>
                                    <div className = "form-group mb-3">
                                        <label>Last Name</label>
                                        <input type="text" name="" onChange={this.handleInput} value={this.state.lastname} className="form-control" /> 
                                    </div>
                                    <div className = "form-group mb-3">
                                        <label>User Name</label>
                                        <input type="text" name="" onChange={this.handleInput} value={this.state.username} className="form-control" /> 
                                    </div>
                                    <div className = "form-group mb-3">
                                        <label>Email Address</label>
                                        <input type="text" name="" onChange={this.handleInput} value={this.state.email} className="form-control" /> 
                                    </div>
                                    <div className = "form-group mb-3">
                                        <label>Phone Number</label>
                                        <input type="text" name="" onChange={this.handleInput} value={this.state.phoneno} className="form-control" /> 
                                    </div>
    
                                    <div className = "form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save Customer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
*/
