const baseURL = 'http://localhost:9000/api/staff/'

const StaffService = {
  getStaffMember(id) {
    return fetch(baseURL + id)
    .then(res => res.json());
  },

  getStaff() {
    return fetch(baseURL)
        .then(res => res.json());
  },

  updateStaff(member) {
    const updateURL = baseURL + member._id;
    delete member._id
    return fetch(updateURL, {
      method: 'PUT',
      body: JSON.stringify(member),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  },

  addStaff(member) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(member),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteStaff(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
}

export default StaffService;