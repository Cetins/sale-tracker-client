const baseURL = 'https://eu-west-1.aws.data.mongodb-api.com/app/demoapp-hvijt/endpoint/shops'

const ShopService = {
  getShop() {
      return fetch(baseURL)
          .then(res => res.json());
  },

  getShopByEmail(email) {
    const url = baseURL + "?email=" + email
    return fetch(url)
        .then(res => res.json());
  },

  updateShop(shop) {
      return fetch(baseURL + shop._id, {
          method: 'PUT',
          body: JSON.stringify(shop),
          headers: {
              'Content-Type': 'application/json'
          }
      })
          .then(res => res.json());
  },

  addShop(shop) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(shop),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
  },

  deleteShop(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      });
  }
}

export default ShopService;