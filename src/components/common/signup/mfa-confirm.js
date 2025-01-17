import { useRouter } from 'next/router';
import { useState } from 'react';

const MFAConfirm = ({ csrfToken, mfaToken, oobCode, brandingLogo }) => {
  const [code, setCode] = useState('');
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission (e.g., POST request)
    router.push("/signup/verify-id")
    console.log('MFA Code submitted:', code);
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
      <div className="row align-items-center justify-content-center col-md-8 col-12 pe-md-4 pe-0">
        <div className="px-4 py-3 w-100 w-md-100 w-xl-75 mx-auto">
          {/* Logo */}
          <div
            className="logo login-logo mx-auto"
            style={{
              backgroundImage: `url(https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png)`,
              height: '100px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>

          {/* MFA Form */}
          <div id="mfa-form-container">
            <h5 className="text-center fw-semibold mb-4 my-2">Code Authentication</h5>
            <p className="text-center my-2">
              Type the code that was sent to your MFA device registered with Pluto Health
            </p>

            <form id="mfa-form" method="POST" action="/login/mfa/confirm" onSubmit={handleSubmit} style={{ width: '20rem', margin: '0 auto' }}>
              <div className="form-group">
                <input
                  style={{ width: '6rem', margin: '0 auto' }}
                  name="code"
                  id="code"
                  className="form-control text-center"
                  placeholder="------"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
                <input type="hidden" name="_csrf" id="_csrf" value={csrfToken} />
                <input type="hidden" name="mfa_token" id="mfa_token" value={mfaToken} />
                <input type="hidden" name="oob_code" id="oob_code" value={oobCode} />
              </div>

              <button type="submit"  className="btn btn-primary rounded-pill my-3 w-100">
                Continue
              </button>
            </form>
          </div>

          {/* Request Access */}
          <a href="/request-access" className="d-block my-4 text-center link-primary link-underline-opacity-0">
            Request access
          </a>

          {/* Footer Logos */}
          <div className="text-center">
            <p>Safe. Secure. Trusted.</p>
            <div className="d-flex justify-content-center">
                <img className="me-2" src="/img/hipaa.png" alt="hipaa logo" />
                <img className="me-2" src="/img/soc2.png" alt="soc2 logo" />
                <img className="me-2" src="/img/iso.png" alt="iso logo" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFAConfirm;
