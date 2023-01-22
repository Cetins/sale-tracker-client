import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ServiceService from '../../services/ServiceService';

const EditService = () => {
  const {serviceId} = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ServiceService.getService(serviceId)
    .then(res => setService(res))
  }, []);

  const handleTitleChange = (e) => {service.title = (e.target.value)};
  const handleDurationChange = (e) => {service.duration = (e.target.value)};
  const handlePriceChange = (e) => {service.price = (e.target.value)};

  const handleUpdateServiceSubmit = (e) => {
    e.preventDefault();
    ServiceService.updateService(service)
    .then(alert("Service Updated"))
    .then(navigate("/dashboard"));
  }

  if (service === null) {
    return ( <div>Loading...</div>)
  }

  return (
    <div>
      <p>edit service test</p>

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
    </div>
  )
}

export default EditService