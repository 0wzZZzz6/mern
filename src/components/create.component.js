import React, { useState } from 'react'
import axios from 'axios'

const CreateComponent = (props) => {
    const initialFormState = { businessId: '', personName: '', businessName: '', gstNumber: '' }
    const [business, setBusiness] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setBusiness({
            ...business,
            [name]: value
        })
    }

    const randomId = () => {
        return '_' + Math.random().toString(36).substr(2, 9)
    }

    const addBusiness = data => {
        data.businessId = randomId()
        axios.post('http://localhost:4000/business/add', data)
            .then(res => {
                console.log(res.data)
                setBusiness(initialFormState)
            })
            .catch(err => err)
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={
                event => {
                    event.preventDefault()
                    addBusiness(business)
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
                <div className="form-group">
                    <button className="btn btn-primary">Register Business</button>
                </div>
            </form>
        </div>
    )
}

export default CreateComponent