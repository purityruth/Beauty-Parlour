import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Col, Row } from 'react-bootstrap';
import AdminNavbar from '../admincomponents/AdminNavbar';
import AdminSideNav from '../admincomponents/AdminSideNav';

export default function ListAppointment() {

    const [appointment, setAppointment] = useState([])

    useEffect(()=>{
        fetchAppointment() 
    },[])

    const fetchAppointment = async () => {
        await axios.get(`http://localhost:8000/api/appointments`).then(({data})=>{
            setAppointment(data)
        })
    }

    const deleteAppointment = async (id) => {
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

          await axios.delete(`http://localhost:8000/api/appointments/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchAppointment()
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
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">List Of Appointments</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                            <Link className='nav-link pt-0' to={"/admincomponents/AdminLanding"}> Home</Link>
                            </li>
                            <li className="breadcrumb-item active">ListofAppointments </li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>

                <div className='row'>
                    <div className='col'>
                        <Link className='btn btn-primary mb-2 float-end' to={"/appointments/BookAppointment"} style={{backgroundColor: '#d81b60', color: '#fff'}}>
                        Book Appointment
                        </Link>
                    </div>
                </div>
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone No</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Service</th>
                                    <th>Expert</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointment.length > 0 && (
                                        appointment.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.name}</td>
                                                <td>{row.phoneno}</td>
                                                <td>{row.email}</td>
                                                <td>{row.date}</td>
                                                <td>{row.service}</td>
                                                <td>{row.expert}</td>
                                                <td>
                                                    <Link to={`/appointments/EditAppointment/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteAppointment(row.id)}>
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