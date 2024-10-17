import React, { useState } from 'react';

const VerifyIDManual = () => {
  const [state, setState] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [ssn, setSSN] = useState('');
  const [dob, setDOB] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [inputState, setInputState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmitDriverLicense = (e) => {
    e.preventDefault();
    // Handle submission of driver’s license form
    console.log({ state, licenseNumber, expirationDate });
  };

  const handleSubmitSSN = (e) => {
    e.preventDefault();
    // Handle submission of social security form
    console.log({ ssn, dob, address, address2, city, inputState, zip });
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
      <div className="row align-items-center justify-content-center flex-column col-12 col-md-8 pe-md-4 pe-0">
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

        <div className="w-100 w-md-75 w-lg-50 mx-auto px-5 px-md-2">
          <h2 className="mt-4 fw-semibold">Manual identification</h2>
          <h6>We’ll need to grab your driver’s license and social security information to manually identify you.</h6>

          {/* Driver’s License Form */}
          <h3 className="mt-4 fw-semibold">Driver’s license information</h3>
          <h6>
            Please enter your driver’s license information. No license?{' '}
            <a href="#" className="link-blue">
              See other acceptable forms of ID.
            </a>
          </h6>

          <form onSubmit={handleSubmitDriverLicense}>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <select
                type="state"
                className="form-select"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option></option>
                {/* Add state options here */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="license_number" className="form-label">License Number</label>
              <input
                type="text"
                className="form-control"
                id="license_number"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expiration_date" className="form-label">Expiration Date</label>
              <input
                type="date"
                className="form-control"
                id="expiration_date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </div>
            <div className="d-flex">
              <button type="submit" className="btn btn-primary rounded-pill w-100">Submit</button>
            </div>
          </form>

          <hr />

          {/* Social Security Form */}
          <h2 className="mt-4 fw-semibold">Social security information</h2>
          <h6>Please enter your social security information.</h6>

          <form className="row" onSubmit={handleSubmitSSN}>
            <div className="col-md-6">
              <label htmlFor="ssn" className="form-label">SSN (Last 4 digits)</label>
              <input
                type="text"
                className="form-control"
                id="ssn"
                value={ssn}
                onChange={(e) => setSSN(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">Date of birth</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="address2" className="form-label">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Apartment, studio, or floor"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select
                id="inputState"
                className="form-select"
                value={inputState}
                onChange={(e) => setInputState(e.target.value)}
              >
                <option selected>Choose...</option>
                {/* Add state options here */}
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="d-flex my-4">
              <button type="submit" className="btn btn-primary rounded-pill w-100">Submit</button>
            </div>
          </form>

          <a href="/signup/verify-id" className="link-primary text-center d-block my-4">
            <i className="fa fa-arrow-left"></i> Back to digital verification
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyIDManual;
