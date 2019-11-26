import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const IndexComponent = () => {
    const [business, setBusiness] = useState([])
    const [idDelete, setIddelete] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:4000/business')
            .then(response => {
                setBusiness(response.data)
                console.log(`status indexComponent: ${response.status}`)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [idDelete])

    const deleteBusiness = (id) => {
        axios.get(`http://localhost:4000/business/delete/${id}`)
            .then(console.log('Deleted'), setIddelete(id))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3 align="center">Business List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Business</th>
                        <th>GST Number</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        business.map(item => (
                            <tr key={item.businessId}>
                                <td>{item.personName}</td>
                                <td>{item.businessName}</td>
                                <td>{item.gstNumber}</td>
                                <td>
                                    <Link to={"/edit/" + item._id} className="btn btn-primary">Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteBusiness(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default IndexComponent