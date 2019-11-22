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

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={
                event => {
                    event.preventDefault()

                    props.updateBusiness(props.match.params.id, business)
                    props.history.push('/index');
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
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditComponent