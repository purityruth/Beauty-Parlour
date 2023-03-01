import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

import AdminNavbar from "../admincomponents/AdminNavbar";
import AdminSideNav from "../admincomponents/AdminSideNav";

export default function ListStaff() {

    const [adminStaff, setStaff] = useState([])

    useEffect(()=>{
        fetchAdminStaff() 
    },[])

    const fetchAdminStaff = async () => {
        await axios.get(`http://localhost:8000/api/adminStaff`).then(({data})=>{
            setStaff(data)
        })
    }

    const deleteAdminStaff = async (id) => {
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

          await axios.delete(`http://localhost:8000/api/adminStaff/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchAdminStaff()
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
                    <h1 className="m-0 text-dark">Staff Members</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                        <Link className='nav-link pt-0' to={"/admincomponents/AdminLanding"}> Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Dashboard </li>
                    </ol>
                </div>{/* /.col */}
                </div>{/* /.row */}
            </div>{/* /.container-fluid */}
            </div>

            <section className="content">
                <div className="row">
                    <div className='col-12'>
                        <Link className='btn btn-primary mb-3 float-end' to={"/adminStaff/AddStaff"} style={{backgroundColor: '#d81b60', color: '#fff'}}>
                            Add Staff
                        </Link>
                    </div>
                    <div className="col-12">
                        <div className="card card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0 text-center">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Phone No</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th colSpan={2}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            adminStaff.length > 0 && (
                                                adminStaff.map((row, key)=>(
                                                    <tr key={key}>
                                                        <td>{row.firstname}</td>
                                                        <td>{row.lastname}</td>
                                                        <td>{row.email}</td>
                                                        <td>{row.phoneno}</td>
                                                        <td>{row.description}</td>
                                                        <td>
                                                            <img width="300px" src={`http://localhost:8000/storage/adminStaff/image/${row.image}`} />
                                                        </td>
                                                        <td>
                                                            <Link to={`/adminStaff/EditStaff/${row.id}`} className='btn btn-success me-2'>
                                                                Edit
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Button variant="danger" onClick={()=>deleteAdminStaff(row.id)}>
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
            </section>
            
        </div>
    </div>
    )
}