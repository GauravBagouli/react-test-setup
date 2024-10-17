import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MFAChoose = ({ branding, csrfToken, mfaToken, mfaAuthenticators }) => {
  const router = useRouter();
  const [mfaAuthenticatorList, setMfaAuthenticatorList] = useState(
    mfaAuthenticators || [{ ID: 1, Name: 'test+01@pluto.health' }],
  );

  useEffect(() => {
    setMfaAuthenticatorList(
      mfaAuthenticators || [{ ID: 1, Name: 'test+01@pluto.health' }],
    );
  }, [mfaAuthenticators]);

  const handleSend = () => {
    router.push('/login/mfa/confirm');
  };

  return (
    <div className="row justify-content-center" style={{ minHeight: '102vh' }}>
      <div className="col-4 bg-blue d-none d-md-flex align-items-center justify-content-center min-vh-100">
        <ul className="text-white">
          <li className="list-group-item d-flex mb-4">
            <i
              className="d-block fa fa-circle-check pe-3 fs-4"
              aria-hidden="true"
            ></i>
            <div>
              <p className="m-0">Unlock care recommendations</p>
              <small>Discover better health</small>
            </div>
          </li>
          <li className="list-group-item d-flex mb-4">
            <i
              className="d-block fa fa-circle-check pe-3 fs-4"
              aria-hidden="true"
            ></i>
            <div>
              <p className="m-0">Understand your health</p>
              <small>Get personalized plans</small>
            </div>
          </li>
          <li className="list-group-item d-flex mb-4">
            <i
              className="d-block fa fa-circle-check pe-3 fs-4"
              aria-hidden="true"
            ></i>
            <div>
              <p className="m-0">Access to care</p>
              <small>Access to free or low-cost treatment</small>
            </div>
          </li>
        </ul>
      </div>

      <div className="row align-items-center justify-content-center col-md-8 col-12 pe-md-4 pe-0">
        <div className="px-4 py-3 w-75 mx-auto">
          <div
            className="logo login-logo mx-auto"
            style={{
              backgroundImage: `url(https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png)`,
            }}
          ></div>

          <div id="mfa-choice-container">
            <form
              id="mfa-choose-form"
              action="#"
              style={{ width: '20rem', margin: '0 auto' }}
              className="needs-validation w-auto"
              noValidate
            >
              {console.log('mfaAuthenticatorList', mfaAuthenticatorList)}
              {mfaAuthenticatorList?.map((authenticator) => (
                <div className="form-check" key={authenticator.ID}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="id"
                    value={authenticator.ID}
                    id={authenticator.ID}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={authenticator.ID}
                  >
                    {authenticator.Name}
                  </label>
                </div>
              ))}

              <input
                type="hidden"
                name="mfa_token"
                id="mfa_token"
                value={mfaToken}
              />
              <input type="hidden" name="_csrf" id="_csrf" value={csrfToken} />
              <button
                type="button"
                className="btn btn-primary rounded-pill my-3 w-100"
                onClick={handleSend}
              >
                Send
              </button>
            </form>
          </div>

          <a
            href="/request-access"
            className="d-block my-4 text-center link-primary link-underline-opacity-0"
          >
            Request access
          </a>

          <div className="text-center">
            <p className="fs-6">Safe. Secure. Trusted.</p>
            <div className="d-flex justify-content-center">
              <img className="me-2" src="/img/hipaa.png" alt="HIPAA logo" />
              <img className="me-2" src="/img/soc2.png" alt="SOC2 logo" />
              <img className="me-2" src="/img/iso.png" alt="ISO logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFAChoose;
