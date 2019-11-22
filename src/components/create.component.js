import React, { useState, useEffect } from 'react'

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


    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={
                event => {
                    event.preventDefault()

                    props.addBusiness(business)
                    setBusiness(initialFormState)
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