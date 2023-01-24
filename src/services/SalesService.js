const baseURL = 'http://localhost:9000/api/sales/'

const SalesService = {
  getSale(id) {
    return fetch(baseURL + id)
    .then(res => res.json());
  },

  getSales() {
    return fetch(baseURL)
    .then(res => res.json());
  },

  updateSales(sale) {
    const updateURL = baseURL + sale._id;
    delete sale._id
    return fetch(updateURL, {
      method: 'PUT',
      body: JSON.stringify(sale),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  },

  addSale(sale) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(sale),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
  },

  deleteSale(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
}

export default SalesService;