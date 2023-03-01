import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Col, Row } from 'react-bootstrap';
import AdminNavbar from '../admincomponents/AdminNavbar';
import AdminSideNav from '../admincomponents/AdminSideNav';

export default function ListCustomer() {

    const [adminCustomer, setCustomer] = useState([])

    useEffect(()=>{
        fetchAdminCustomer() 
    },[])

    const fetchAdminCustomer = async () => {
        await axios.get(`http://localhost:8000/api/adminCustomer`).then(({data})=>{
            setCustomer(data)
        })
    }

    const deleteAdminCustomer = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8000/api/adminCustomer/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchAdminCustomer()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
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
                            <h1 className="m-0 text-dark">List of Clients</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                            <Link className='nav-link pt-0' to={"/admincomponents/AdminLanding"}> Home</Link>
                            </li>
                            <li className="breadcrumb-item active">ClientList </li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>

                <div className='row'>
                    <div className='col'>
                        <Link className='btn mb-3 float-end' to={"/adminCustomer/addCustomer"} style={{backgroundColor: '#d81b60', color: '#fff'}}>
                        Add Customer
                        </Link>
                    </div>
                </div>
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Phone No</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    adminCustomer.length > 0 && (
                                        adminCustomer.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.firstname}</td>
                                                <td>{row.lastname}</td>
                                                <td>{row.username}</td>
                                                <td>{row.email}</td>
                                                <td>{row.gender}</td>
                                                <td>{row.age}</td>
                                                <td>{row.phoneno}</td>
                                                <td>
                                                    <Link to={`/adminCustomer/EditCustomer/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteAdminCustomer(row.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}