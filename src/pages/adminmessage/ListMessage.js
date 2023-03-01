import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function ListMessage() {

    const [message, setMessage] = useState([])

    useEffect(()=>{
        fetchMessage() 
    },[])

    const fetchMessage = async () => {
        await axios.get(`http://localhost:8000/api/customerstaff`).then(({data})=>{
            setMessage(data)
        })
    }

    const deleteMessage = async (id) => {
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

          await axios.delete(`http://localhost:8000/api/customerstaff/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchMessage()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    return (

        <div className="container">

            <div>
                <Link className='btn btn-primary mb-2 float-end' to={"/customer-staff/customertostaff/AddMessage"}>
                Add Message
                </Link>
            </div>
            <div className="card card-body">
                <div className="table-responsive">
                    <table className="table table-bordered mb-0 text-center">
                        <thead>
                            <tr>
                                <th>Staff Name</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                message.length > 0 && (
                                    message.map((row, key)=>(
                                        <tr key={key}>
                                            <td>{row.staffname}</td>
                                            <td>{row.message}</td>
                                            <td>
                                                <Link to={`/customer-staff/customertostaff/EditMessage/${row.id}`} className='btn btn-success me-2'>
                                                    Edit
                                                </Link>
                                                <Button variant="danger" onClick={()=>deleteMessage(row.id)}>
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
    )
}