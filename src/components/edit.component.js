import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EditComponent = (props) => {
    const initialFormState = { businessId: '', personName: '', businessName: '', gstNumber: '' }
    const [business, setBusiness] = useState(initialFormState)

    useEffect(() => {
        axios.get(`http://localhost:4000/business/edit/${props.match.params.id}`)
            .then(response => {
                setBusiness(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setBusiness({
            ...business,
            [name]: value
        })
    }

    const cancelEdit = (event) => {
        event.preventDefault()
        props.history.push('/index')
    }

    const updateBusiness = (id, business) => {
        axios.post(`http://localhost:4000/business/update/${id}`, business)
            .then(res => {
                console.log(res.data)
                return props.history.push('/index')
            })
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={
                event => {
                    event.preventDefault()
                    updateBusiness(props.match.params.id, business)
                }
            }>
                <div className="form-group">
                    <label>Add Person Name: </label>
                    <input
                        name="personName"
                        value={business.personName}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label>Add Business Name: </label>
                    <input
                        name="businessName"
                        value={business.businessName}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label>Add GST Number: </label>
                    <input
                        name="gstNumber"
                        value={business.gstNumber}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control" />
                </div>
                <div className="form-group btn-group" >
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-danger" onClick={cancelEdit}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditComponent