import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Stylists() {

    const [adminStaff, setStaff] = useState([])

    useEffect(()=>{
        fetchAdminStaff() 
    },[])

    const fetchAdminStaff = async () => {
        await axios.get(`http://localhost:8000/api/adminStaff`).then(({data})=>{
            setStaff(data)
        })
    }


    return (
    <div>

        <div className="container">

            <section className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0 text-center">
                                    <tbody>
                                        {
                                            adminStaff.length > 0 && (
                                                adminStaff.map((row, key)=>(
                                                    <tr key={key}>
                                                         <tr>
                                                            <img width="200px" height="200px" src={`http://localhost:8000/storage/adminStaff/image/${row.image}`} />
                                                        </tr>
                                                        <tr>{row.firstname}</tr>
                                                        <tr>{row.lastname}</tr>
                                                        <tr>{row.email}</tr>
                                                        <tr>{row.phoneno}</tr>
                                                        <tr>{row.description}</tr>
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