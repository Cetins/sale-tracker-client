import React, { useState } from 'react';
import ServiceService from '../../services/ServiceService';
import { useNavigate } from 'react-router-dom';

const NewService = () => {
    const [title, setTitle] = useState();
    const [duration, setDuration] = useState();
    const [price, setPrice] = useState();
    const navigate = useNavigate();

    const handleTitleChange = (e) => {setTitle(e.target.value)}
    const handleDurationChange = (e) => {setDuration(e.target.value)}
    const handlePriceChange = (e) => {setPrice(e.target.value)}

    const handleNewServiceSubmit = () => {
        ServiceService.addService({
            title: title,
            duration: duration,
            price: price
        })
        .then(alert("New Service Added"))
        .then(navigate("/dashboard"))
    }

    return (
        <div>
            <p>new service test</p>
            <form className="styled-form" onSubmit={handleNewServiceSubmit}>
                <div>
                    <label>Service Title:</label>
                    <input type="text" onChange={handleTitleChange} required/>
                </div>
                <div>
                    <label>Duration:</label>
                    <input type="number" onChange={handleDurationChange} required/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" onChange={handlePriceChange} required/>
                </div>
                <input type="submit" value="Add Service"/>
            </form>
        </div>
    )
}

export default NewService;