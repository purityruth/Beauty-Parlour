import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import AdminNavbar from '../admincomponents/AdminNavbar';
import AdminSideNav from '../admincomponents/AdminSideNav';

export default function ListService() {

    const [service, setService] = useState([])

    useEffect(()=>{
        fetchService() 
    },[])

    const fetchService = async () => {
        await axios.get(`http://localhost:8000/api/service`).then(({data})=>{
            setService(data)
        })
    }

    const deleteService = async (id) => {
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

          await axios.delete(`http://localhost:8000/api/service/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchService()
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
                            <h1 className="m-0 text-dark">List Service</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                            <Link className='nav-link pt-0' to={"/admincomponents/AdminLanding"}> Home</Link>
                            </li>
                            <li className="breadcrumb-item active">ListService </li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                <div className='row'>
                    <div className='col mr-3 md-3'>
                        <Link className='btn btn-primary mb-2 float-end' to={"/services/AddService"} style={{backgroundColor: '#d81b60', color: '#fff'}}>
                        Add Service
                        </Link>
                    </div>
                </div>
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Service Name</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    service.length > 0 && (
                                        service.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.servicename}</td>
                                                <td>{row.description}</td>
                                                <td>
                                                    <Link to={`/services/EditService/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteService(row.id)}>
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