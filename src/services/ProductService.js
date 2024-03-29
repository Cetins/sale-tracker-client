const baseURL = 'http://localhost:9000/api/products/'

const ProductService = {
  getProduct(id) {
    return fetch(baseURL + id)
    .then(res => res.json());
  },

  getProducts() {
    return fetch(baseURL)
    .then(res => res.json());
  },

  updateProduct(product) {
    const updateURL = baseURL + product._id;
    delete product._id
    return fetch(updateURL, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  }, 

  addProduct(product) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
  },

  deleteProduct(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
}

export default ProductService;