import React from 'react';

const VerifyIDChoice = ({ brandingLogo }) => {
  const handleManualInfo = () => {
    // Redirect or handle manual info entry
    console.log("Manual info entry selected");
  };

  const handleContactSupport = () => {
    // Redirect or handle contact support
    console.log("Contact support selected");
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

          <h2 className="mt-5 fw-semibold">Other ways to verify your identity</h2>

          <h4 className="fw-semibold">Manual Identity</h4>
          <h5 className="fw-semibold mb-0">What you’ll need</h5>
          <ul>
            <li>Valid driver’s license</li>
            <li>Last 4 digits of Social Security Number</li>
          </ul>

          <div className="d-flex my-4">
            <button
              className="btn btn-outline-primary rounded-pill w-100 mt-4"
              onClick={handleManualInfo}
            >
              Enter info manually
            </button>
          </div>

          <h5 className="fw-semibold mb-0">Support Assisted</h5>
          <ul>
            <li>Valid driver’s license</li>
            <li>Video session with our support team</li>
          </ul>

          <div className="d-flex my-4">
            <button
              className="btn btn-outline-primary rounded-pill w-100 mt-4"
              onClick={handleContactSupport}
            >
              Contact support
            </button>
          </div>

          <a href="/signup/verify-choice" className="link-primary text-center d-block mb-5">
            <i className="fa fa-arrow-left"></i> Verify another way
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyIDChoice;
