import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUserName] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [password, setPassword] = useState("")
  const [validationError,setValidationError] = useState({})

  const Register = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('fullname', fullname)
    formData.append('email', email)
    formData.append('username', username)
    formData.append('gender', gender)
    formData.append('age', age)
    formData.append('phoneno', phoneno)
    formData.append('password', password)
    

    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`http://localhost:8000/api/register`, formData).then(({data})=>{
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
    });
  }

  return (
    <div className="container" style={{marginLeft: '300px'}}>
      <div className="row justify-content-left">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className = "card-header">
              <h4 className="card-title">Add Customer</h4>
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
            <div className="card-body" >
              
                <Form onSubmit={Register}>
                    <div className = "form-group mb-2">
                    <Row> 
                        <Col>
                          <Form.Group controlId="FirstName">
                              <Form.Label>FullName</Form.Label>
                              <Form.Control type="text" value={fullname} onChange={(event)=>{
                                setFullName(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col>  
                      </Row>
                  </div>
                  
                  
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
                          <Form.Group controlId="UserName">
                              <Form.Label>UserName</Form.Label>
                              <Form.Control type="text" value={username} onChange={(event)=>{
                                setUserName(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col>  
                      </Row>
                  </div>

                  <div className = "form-group mb-2">
                    <Row> 
                        <Col>
                          <Form.Group controlId="Gender">
                              <Form.Label>Gender</Form.Label>
                              <Col sm={10} value={gender} onChange={(event)=>{
                                setGender(event.target.value)
                              }}>
                                <Form.Check type="radio" label="Female" name="formGender" id="Female" />
                                <Form.Check type="radio" label="Male" name="formGender" id="Male" />
                                <Form.Check type="radio" label="Other" name="formGender" id="Other" />
                              </Col>
                          </Form.Group>
                        </Col>  
                      </Row>
                  </div>
                  
                  <div className = "form-group mb-2">
                    <Row> 
                        <Col>
                          <Form.Group controlId="Age">
                              <Form.Label>Age</Form.Label>
                              <Form.Control type="number" value={age} onChange={(event)=>{
                                setAge(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col>  
                    </Row>
                  </div>
                  <div className = "form-group mb-2">
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



/*class AddCustomer extends Component {

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























// import React from 'react'
// import { Form, Col, Row, Button, InputGroup } from 'react-bootstrap'
// import { useState } from 'react'
// import axios from 'axios'
// import Swal from 'sweetalert2'
// import { useNavigate } from 'react-router-dom'



// export default function Register() {
    
//     const navigate = useNavigate();

//     const [fullname, setFullName] = useState("")
//     const [email, setEmail] = useState("")
//     const [username, setUserName] = useState("")
//     const [gender, setGender] = useState("")
//     const [age, setAge] = useState("")
//     const [phoneno, setPhoneno] = useState("")
//     const [password, setPassword] = useState("")
//     const [validationError,setValidationError] = useState({})

//     const Register = async (e) => {
//         e.preventDefault();

//     const formData = new FormData()

//     formData.append('fullname', fullname)
//     formData.append('email', email)
//     formData.append('username', username)
//     formData.append('gender', gender)
//     formData.append('age', age)
//     formData.append('phoneno', phoneno)
//     formData.append('password', password)
    

//     await axios.post(`http://localhost:8000/api/register`, formData).then(({data})=>{
//       Swal.fire({
//         icon:"success",
//         text:data.message
//       })
//       navigate("/")
//     }).catch(({response})=>{
//       if(response.status===422){
//         setValidationError(response.data.errors)
//       }else{
//         Swal.fire({
//           text:response.data.message,
//           icon:"error"
//         })
//       }
//     })

//     if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
  
//       setValidated(true);
//     }


//     const [validated, setValidated] = useState(false);
  
//     const handleInput = (event) => {
//       const form = event.currentTarget;
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
  
//       setValidated(true);
//     };
  
//     return (
//         <div className="container">
//             <div className="row justify-content-left">
//                 <div className="col-12 col-sm-12 col-md-6">
//                     <div className="card">
//                         <div className = "card-header">
//                             <h3 className="card-title"> Login </h3>
//                             <hr />
//                         </div>
                        
//                         <div className="card-body">
//                             <Form noValidate validated={validated} onSubmit={Register}>
//                                 <Row className="mb-6">
//                                     <Form.Group as={Col} md="4" controlId="fullname">
//                                         <Form.Label>Full name</Form.Label>
//                                         <Form.Control
//                                         required
//                                         type="text"
//                                         placeholder="Full name"
//                                         value={fullname} onChange={(event)=>{
//                                             setFullName(event.target.value)
//                                           }}
//                                         />
//                                         <Form.Control.Feedback type="invalid">
//                                             Please enter full name.
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Row>

//                                 <Row>
//                                     <Form.Group as={Col} md="6" controlId="validationCustom02">
//                                         <Form.Label>Email Address</Form.Label>
//                                         <Form.Control
//                                         required
//                                         type="text"
//                                         placeholder="Email address"
//                                         value={email} onChange={(event)=>{
//                                             setEmail(event.target.value)
//                                           }}
//                                         />
//                                         <Form.Control.Feedback type="invalid">
//                                         Please enter your email address.
//                                     </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Row>

//                                 <Row>
//                                     <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//                                         <Form.Label>Username</Form.Label>
//                                         <InputGroup hasValidation>
//                                         <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                                         <Form.Control
//                                             type="text"
//                                             placeholder="Username"
//                                             value={username} onChange={(event)=>{
//                                                 setUserName(event.target.value)
//                                               }}
//                                             aria-describedby="inputGroupPrepend"
//                                             required
//                                         />
//                                         <Form.Control.Feedback type="invalid">
//                                             Please choose a username.
//                                         </Form.Control.Feedback>
//                                         </InputGroup>
//                                     </Form.Group>
//                                 </Row>
//                                 <Row className="mb-3">
//                                     <Form.Group as={Col} md="6" controlId="validationCustom03">
//                                         <Form.Label>Age</Form.Label>
//                                         <Form.Control type="text" 
//                                         value={age} onChange={(event)=>{
//                                             setAge(event.target.value)
//                                         }}
//                                         placeholder="Age" required />
//                                         <Form.Control.Feedback type="invalid">
//                                         Please provide your age.
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                     <Form.Group as={Col} md="3" controlId="validationCustom04">
//                                         <Form.Label>Gender</Form.Label>
//                                         <Form.Control type="text" 
//                                         value={gender} onChange={(event)=>{
//                                             setGender(event.target.value)
//                                         }}
//                                         placeholder="M/F/O" required />
//                                         <Form.Control.Feedback type="invalid">
//                                         Please provide your gender.
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                     <Form.Group as={Col} md="3" controlId="validationCustom05">
//                                         <Form.Label>Phone Number</Form.Label>
//                                         <Form.Control type="text" 
//                                         value={phoneno} onChange={(event)=>{
//                                             setPhoneno(event.target.value)
//                                         }}
//                                         placeholder="Phone Number" required />
//                                         <Form.Control.Feedback type="invalid">
//                                         Please provide a valid phone number.
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Row>
//                                 <Row>
//                                     <Form.Group as={Col} md="6" controlId="validationCustom03">
//                                         <Form.Label>Password</Form.Label>
//                                         <Form.Control type="text" 
//                                         value={password} onChange={(event)=>{
//                                             setPassword(event.target.value)
//                                         }}
//                                         placeholder="Password" required />
//                                         <Form.Control.Feedback type="invalid">
//                                         Please provide your password.
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Row>
//                                 <Form.Group className="mb-3">
//                                 <Form.Check
//                                     required
//                                     label="Agree to terms and conditions"
//                                     feedback="You must agree before submitting." 
//                                     feedbackType="invalid"
//                                 />
//                                 </Form.Group>
//                                 <Button type="submit">Submit form</Button>
//                             </Form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
