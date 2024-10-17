import React, { useState } from 'react';

const VerifyIDManual = ({ brandingLogo, userInfo }) => {
  const [firstName, setFirstName] = useState(userInfo?.FirstName || '');
  const [lastName, setLastName] = useState(userInfo?.LastName || '');
  const [dob, setDob] = useState(userInfo?.DateOfBirth || '');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to the server
    console.log({ firstName, lastName, dob, gender });
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
      <div className="row align-items-center justify-content-center flex-column col-md-8 col-12 pe-md-4 pe-0">
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

        <div className="w-100 w-md-75 mx-auto px-5 px-md-2">
          <h6 className="fw-bold ps-0 ms-0">Step 1 of 3</h6>
          <div className="row justify-content-center">
            <div className="col mx-1 bg-blue" style={{ height: '0.2rem' }}></div>
            <div className="col mx-1 bg-blue-subtle"></div>
            <div className="col mx-1 bg-blue-subtle"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col mx-1 ps-0">Verify Identity</div>
            <div className="col mx-1 ps-0">Agree to HIPAA</div>
            <div className="col mx-1 ps-0">Verify Address</div>
          </div>

          <h2 className="mt-4 fw-semibold">Confirm your information</h2>
          <h6 className="mb-5">Ensure the information collected in identity verification is correct.</h6>

          <form method="post" action="/signup/verify-id/confirm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">Legal First Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                id="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">Legal Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                id="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="date_of_birth"
                id="date_of_birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Born biologically as</label>
              <select
                name="gender"
                id="gender"
                className="form-select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="" disabled>Please Select</option>
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="o">Other</option>
              </select>
            </div>

            <div className="d-flex my-4">
              <button type="submit" className="btn btn-primary rounded-pill w-100">
                Confirm and Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyIDManual;
