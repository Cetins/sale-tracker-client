const baseURL = 'http://localhost:9000/api/services/'

const ServiceService = {
  getService(id) {
    return fetch(baseURL + id)
    .then(res => res.json());
  },

  getServices() {
      return fetch(baseURL)
          .then(res => res.json());
  },

  updateService(service) {
    const updateURL = baseURL + service._id;
    delete service._id
    return fetch(updateURL, {
      method: 'PUT',
      body: JSON.stringify(service),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  },

  addService(service) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(service),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
  },

  deleteService(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      });
  }
}

export default ServiceService;