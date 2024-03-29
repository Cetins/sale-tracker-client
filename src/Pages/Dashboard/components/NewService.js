import React, { useState } from 'react';
import ServiceService from '../../../services/ServiceService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NewService = () => {
    const [title, setTitle] = useState();
    const [duration, setDuration] = useState();
    const [price, setPrice] = useState();
    const navigate = useNavigate();
    const navigateDashboard = () => navigate("/dashboard");

    const handleTitleChange = (e) => {setTitle(e.target.value)}
    const handleDurationChange = (e) => {setDuration(parseInt(e.target.value))}
    const handlePriceChange = (e) => {setPrice(parseInt(e.target.value))}

    const handleNewServiceSubmit = (e) => {
        e.preventDefault();
        ServiceService.addService({
            title: title,
            duration: duration,
            price: price
        })
        .then(setTimeout(navigateDashboard, 1000))
        .then(toast.info("New Service Added"))
    }

    return (
        <div className='parent-container'>
            <div className='child-container'>
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
        </div>
    )
}

export default NewService;