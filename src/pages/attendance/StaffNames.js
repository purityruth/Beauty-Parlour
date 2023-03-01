import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function StaffNames() {

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
                                                        <tr>{row.firstname} {row.lastname}</tr>
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