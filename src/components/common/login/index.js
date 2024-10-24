import React, { useEffect, useState } from 'react';
import API from '@/helpers/api';
import { handleErrorMessage } from '@/utils/commonFunctions';
import { useRouter } from 'next/router';
import { encodeData } from '@/helpers/auth';

const Login = ({ branding, csrfToken }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ Username: '', Password: '' });
  const handleLogin = async (e) => {
    let payload = {
      Username: formData.Username,
      Password: formData.Password,
    };
    e.preventDefault();
    API.apiPost('userLogin', payload)
      .then((response) => {
        if (
          response?.data?.content &&
          response?.data?.status_code === 200 &&
          response?.data?.status_text === 'OK'
        ) {
          router.push({
            pathname: '/login/mfa/choose',
            query: { data: encodeData(response?.data?.content) },
          });
        }
      })
      .catch((error) => {
        console.log(error);
        handleErrorMessage(error);
      });
  };
  return (
    <div className="row justify-content-center" style={{ minHeight: '102vh' }}>
      <div className="col-4 d-md-flex d-none bg-blue align-items-center justify-content-center min-vh-100">
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
        <div className="px-4 py-3 w-100 w-md-75 w-xl-50 mx-auto">
          <div
            className="logo login-logo mx-auto"
            style={{
              backgroundImage: `url(https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png)`,
            }}
          ></div>

          <div id="login-form-container">
            <h5 className="text-center fw-semibold my-2 mb-5 mb-md-4">
              Take control of your health
            </h5>
            <form id="login-form" method="POST" action="#">
              <input type="hidden" name="_csrf" id="_csrf" value={csrfToken} />
              <label htmlFor="username" className="form-label text-start my-0">
                Email address
              </label>
              <input
                id="username"
                className="form-control mb-3"
                name="username"
                placeholder="Enter your email address"
                type="email"
                onChange={(e) =>
                  setFormData({ ...formData, Username: e.target.value })
                }
                required
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
                onChange={(e) =>
                  setFormData({ ...formData, Password: e.target.value })
                }
              />
              <div className="text-end mb-5">
                <a
                  href="/verify-email"
                  className="link-blue link-underline-opacity-0"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="button"
                className="btn btn-primary rounded-pill my-3 w-100"
                onClick={(e) => handleLogin(e)}
              >
                Login
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

export default Login;
