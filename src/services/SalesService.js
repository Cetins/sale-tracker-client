const baseURL = 'https://eu-west-1.aws.data.mongodb-api.com/app/demoapp-hvijt/endpoint/sales'

const SalesService = {
  getSale(id) {
    return fetch(baseURL + id)
    .then(res => res.json());
  },

  getSales() {
    return fetch(baseURL)
    .then(res => res.json());
  },
  
  getSalesByShopId(shopId) {
    const url = baseURL + "?shop_id=" + shopId
    return fetch(url)
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

  addServiceSale(sale) {
    const serviceUrl = `${baseURL}/services`;
      return fetch(serviceUrl, {
        method: 'POST',
        body: JSON.stringify(sale),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json());
  },

  addProductSale(sale) {
    const productUrl = `${baseURL}/products`;
      return fetch(productUrl, {
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