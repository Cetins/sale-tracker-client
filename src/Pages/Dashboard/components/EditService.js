import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ServiceService from '../../../services/ServiceService';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const EditService = () => {
  const {serviceId} = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ServiceService.getService(serviceId)
    .then(res => setService(res))
  }, []);

  const handleTitleChange = (e) => {service.title = (e.target.value)};
  const handleDurationChange = (e) => {service.duration = parseInt(e.target.value)};
  const handlePriceChange = (e) => {service.price = parseInt(e.target.value)};

  const navigateDashboard = () => navigate("/dashboard"); 

  const handleUpdateServiceSubmit = (e) => {
    e.preventDefault();
    ServiceService.updateService(service)
    .then(setTimeout(navigateDashboard, 1000))
    .then(toast.info("Service Updated"))
  }

  const handleDeleteService = (e) => {
    e.preventDefault();
    ServiceService.deleteService(serviceId)
    .then(alert("Service Deleted"))
    .then(navigate("/dashboard"));
  }

  if (service === null) {
    return ( <div>Loading...</div>)
  }

  return (
    <div className='parent-container'>
      <div className='child-container'>
        <form className="styled-form" onSubmit={handleUpdateServiceSubmit}>
          <div>
              <label>Product title:</label>
              <input type="text" defaultValue={service?.title} onChange={handleTitleChange} required/>
          </div>
          <div>
              <label>Duration:</label>
              <input type="number" defaultValue={service?.duration} onChange={handleDurationChange} required/>
          </div>
          <div>
              <label>Price:</label>
              <input type="number" defaultValue={service?.price} onChange={handlePriceChange} required/>
          </div>
          <input type="submit" value="Update Service"/>
        </form>
        <button className='delete-button' onClick={handleDeleteService}><MdDeleteForever className='icon'/>Delete Service</button>
      </div>
    </div>
  )
}

export default EditService;