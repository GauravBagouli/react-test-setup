import API, { setAuthorization } from '@/helpers/api';
import { encodeData } from '@/helpers/auth';
import { handleErrorMessage } from '@/utils/commonFunctions';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

let initalData = {
  terms_of_use: '',
  privacy_policy: '',
  notice_of_privacy_practices: '',
  marketing_authorization: '',
};

export default function Signup({ access_code }) {
  const router = useRouter();
  const [consents, setConsent] = useState(initalData);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    gate_pass: '46a52b',
  });

  useEffect(() => {
    if (access_code != '46a52b') {
      router.push('/login');
    }
  }, [access_code]);

  // const fetchData = () => {
  //   API.apiGet('userSignup', '?code=46a52b')
  //     .then((response) => {
  //       if (
  //         response?.data &&
  //         response?.status === 200 &&
  //         response?.statusText === 'OK'
  //       ) {
  //         setConsent(response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       handleErrorMessage(error);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // setAuthorization();
    e.preventDefault();
    if (e.target.checkValidity()) {
      let payload = {
        Email: formData.email,
        Password: formData.password,
        gate_pass: formData.gate_pass,
      };
      API.apiPost('userSignup', payload)
        .then((response) => {
          let queryData = {
            mfa_token: response?.data?.content?.mfa_token,
            oob_code: response?.data?.content?.oob_code,
            page: 'signup',
          };
          if (
            response?.data?.content &&
            response?.data?.status_code === 200 &&
            response?.data?.status_text === 'OK'
          ) {
            router.push({
              pathname: '/login/mfa/confirm',
              query: { page: encodeData(queryData) },
            });
          }
        })
        .catch((error) => {
          console.log(error);
          handleErrorMessage(error);
        });
    } else {
      e.target.classList.add('was-validated');
    }
  };

  return (
    <>
      <div
        className="row justify-content-center min-vh-100"
        style={{ minHeight: '100vh' }}
      >
        <div className="col-4 bg-blue d-none d-md-flex align-items-center justify-content-center min-vh-100">
          <ul className="text-white">
            <li className="list-group-item d-flex mb-4">
              <i
                className="d-block fa fa-circle-check pe-3 fs-4"
                aria-hidden="true"
              />
              <div>
                <p className="m-0">Unlock care recommendations</p>
                <small>Discover better health</small>
              </div>
            </li>
            <li className="list-group-item d-flex mb-4">
              <i
                className="d-block fa fa-circle-check pe-3 fs-4"
                aria-hidden="true"
              />
              <div>
                <p className="m-0">Understand your health</p>
                <small>Get personalized plans</small>
              </div>
            </li>
            <li className="list-group-item d-flex mb-4">
              <i
                className="d-block fa fa-circle-check pe-3 fs-4"
                aria-hidden="true"
              />
              <div>
                <p className="m-0">Access to care</p>
                <small>Access to free or low cost treatment</small>
              </div>
            </li>
          </ul>
        </div>
        <div className="row align-items-center justify-content-center col-md-8 col-12 pe-0">
          <div className="py-3 px-4 px-md-2 w-100 w-md-75 w-xl-50 mx-auto">
            <div
              className="logo login-logo mx-auto mt-8"
              style={{
                backgroundImage: `url(https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png)`,
              }}
            />
            <div id="login-form-container">
              <h5 className="text-center fw-semibold my-2 mb-5 mb-md-2">
                Take control of your health
              </h5>
              <form
                id="login-form"
                className="needs-validation"
                noValidate
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="gorilla.csrf.Token"
                  id="gorilla.csrf.Token"
                  defaultValue="{{ .Globals.CSRFToken }}"
                />
                <input
                  type="hidden"
                  name="gate_pass"
                  id="gate_pass"
                  defaultValue="{{ .Code }}"
                />
                <label htmlFor="email" className="form-label text-start my-0">
                  Email address
                </label>
                <input
                  id="email"
                  className="form-control mb-3"
                  name="email"
                  placeholder="Enter your email address"
                  type="email"
                  required
                  onChange={handleInputChange}
                />
                <label htmlFor="password" className="form-label text-start">
                  Password
                </label>
                <input
                  id="password"
                  className="form-control mb-3"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  required
                  onChange={handleInputChange}
                />
                <div className="form-check my-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="over_eighteen"
                    name="over_eighteen"
                    required
                  />
                  <label className="form-check-label" htmlFor="over18">
                    I am over the age of 18
                  </label>
                </div>
                <div className="form-check my-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms_of_use"
                    name="terms_of_use"
                    required
                  />
                  <label className="form-check-label" htmlFor="over18">
                    I have read and acknowledged the
                    <a href="#modalTerms" data-bs-toggle="modal">
                      Terms of Use
                    </a>
                    ,
                    <a href="#modalPrivacyPolicy" data-bs-toggle="modal">
                      Privacy Policy
                    </a>
                    ,
                    <a href="#modalNPP" data-bs-toggle="modal">
                      Notice of Privacy Practices
                    </a>
                  </label>
                </div>
                <div className="form-check my-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="marketing_authorization"
                    name="marketing_authorization"
                    required
                  />
                  <label className="form-check-label" htmlFor="over18">
                    I consent to receive{' '}
                    <a href="#modalMarketingAuth" data-bs-toggle="modal">
                      marketing communication
                    </a>{' '}
                    from Pluto Health about products and services. I can opt out
                    at any time as described in the
                    <a
                      href="https://www.pluto.health/privacy-practices"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill my-3 w-100"
                >
                  Continue
                </button>
              </form>
            </div>
            <div className="text-center">
              <p className="fs-6">Safe. Secure. Trusted.</p>
              <div className="d-flex justify-content-center">
                <img className="me-2" src="/img/hipaa.png" alt="hipaa logo" />
                <img className="me-2" src="/img/soc2.png" alt="soc2 logo" />
                <img className="me-2" src="/img/iso.png" alt="iso logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" tabIndex={-1} role="dialog" id="modalTerms">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div
                dangerouslySetInnerHTML={{ __html: consents?.terms_of_use }}
              />
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        tabIndex={-1}
        role="dialog"
        id="modalPrivacyPolicy"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content modal-lg">
            <div className="modal-body">
              <div
                dangerouslySetInnerHTML={{ __html: consents?.privacy_policy }}
              />
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" tabIndex={-1} role="dialog" id="modalNPP">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content modal-lg">
            <div className="modal-body">
              <div
                dangerouslySetInnerHTML={{
                  __html: consents?.notice_of_privacy_practices,
                }}
              />
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        tabIndex={-1}
        role="dialog"
        id="modalMarketingAuth"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content modal-lg">
            <div className="modal-body">
              <div
                dangerouslySetInnerHTML={{
                  __html: consents?.marketing_authorization,
                }}
              />
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
