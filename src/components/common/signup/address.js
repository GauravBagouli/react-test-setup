import React, { useState } from 'react';

const Addresses = ({ initialState }) => {
  const [currentAddress, setCurrentAddress] = useState({
    address: '',
    apartmentNumber: '',
    city: '',
    state: initialState || '',
    zip: '',
  });

  const [previousAddresses, setPreviousAddresses] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAddress = () => {
    if (currentAddress.address) {
      setPreviousAddresses((prev) => [...prev, currentAddress]);
      setCurrentAddress({ address: '', apartmentNumber: '', city: '', state: initialState || '', zip: '' });
    } else {
      alert('Please fill in the current address before adding another address.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    console.log('Current Address:', currentAddress);
    console.log('Previous Addresses:', previousAddresses);
    // You can send this data to your API or handle accordingly
  };

  return (
    <div className="row justify-content-center" style={{ minHeight: '102vh' }}>
      {/* Left Panel */}
      <div className="col-4 bg-blue d-none d-md-flex align-items-center justify-content-center min-vh-100">
        <ul className="text-white">
          <li className="list-group-item d-flex mb-4">
            <i className="d-block fa fa-circle-check pe-3 fs-4" aria-hidden="true"></i>
            <div>
              <p className="m-0">Unlock care recommendations</p>
              <small>Discover better health</small>
            </div>
          </li>
          <li className="list-group-item d-flex mb-4">
            <i className="d-block fa fa-circle-check pe-3 fs-4" aria-hidden="true"></i>
            <div>
              <p className="m-0">Understand your health</p>
              <small>Get personalized plans</small>
            </div>
          </li>
          <li className="list-group-item d-flex mb-4">
            <i className="d-block fa fa-circle-check pe-3 fs-4" aria-hidden="true"></i>
            <div>
              <p className="m-0">Access to care</p>
              <small>Access to free or low-cost treatment</small>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Panel */}
      <div className="row align-items-center justify-content-center flex-column col-12 col-md-8 pe-0">
        <div id="main-alert" className="alert alert-danger" style={{ display: 'none' }}></div>

        <div
          className="logo login-logo mx-auto"
          style={{
            backgroundImage: `url(https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png)`,
            height: '100px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="w-100 w-md-75 mx-auto my-4 px-5 px-md-2">
          <h6 className="fw-bold ps-0 ms-0">Step 3 of 3</h6>
          <div className="row justify-content-center">
            <div className="col mx-1 bg-blue" style={{ height: '0.2rem' }}></div>
            <div className="col mx-1 bg-blue"></div>
            <div className="col mx-1 bg-blue"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col mx-1 ps-0">Verify Identity</div>
            <div className="col mx-1 ps-0">Agree to HIPAA</div>
            <div className="col mx-1 ps-0">Verify address</div>
          </div>

          <h2 className="mt-4 fw-semibold">Address information</h2>
          <h6>Your address information is needed to provide a complete picture of your health.</h6>

          <h4 className="fw-semibold mb-0 mt-4">Current Address</h4>
          <p>Please confirm the address you provided when receiving medical care.</p>
          <form method="post" onSubmit={handleSubmit} id="addAddressesForm" className="row">
            <div className="row g-3 mb-3">
              <div className="col-6">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  value={currentAddress.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="apartmentNumber" className="form-label">Apt/Suite</label>
                <input
                  name="apartmentNumber"
                  type="text"
                  className="form-control"
                  value={currentAddress.apartmentNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="city" className="form-label">City</label>
                <input
                  name="city"
                  type="text"
                  className="form-control"
                  value={currentAddress.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select
                  name="state"
                  className="form-select"
                  value={currentAddress.state}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select State</option>
                  {/* Add state options here */}
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  {/* Add other states as necessary */}
                </select>
              </div>
              <div className="col-md-4 mb-4">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input
                  name="zip"
                  type="text"
                  className="form-control"
                  value={currentAddress.zip}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <h4 className="fw-semibold mb-0 mt-4">Previous Addresses</h4>
            <p>Please include all addresses you have used when receiving medical care to help us find health centers you have visited.</p>

            <div id="previousAddresses">
              {previousAddresses.map((addr, index) => (
                <div key={index} className="previous-address mb-3">
                  <p><strong>Previous Address {index + 1}:</strong></p>
                  <p>{addr.address}, Apt {addr.apartmentNumber}, {addr.city}, {addr.state}, {addr.zip}</p>
                </div>
              ))}
            </div>

            <button type="button" onClick={handleAddAddress} className="btn btn-outline-primary rounded-pill w-100 mt-4">Add another address</button>
            <button type="submit" className="btn btn-primary rounded-pill w-100 mt-4">Complete profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
