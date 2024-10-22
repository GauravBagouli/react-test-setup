import API from '@/helpers/api';
import { encodeData } from '@/helpers/auth';
import { handleErrorMessage } from '@/utils/commonFunctions';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function VerifyId() {
  const router = useRouter();
  const [phone, setPhone] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    API.apiPost('verifyId', { phone: phone })
      .then((response) => {
        console.log('response', response);
        if (
          response?.data &&
          response?.status === 200 &&
          response?.statusText === 'OK'
        ) {
          handleVerfiyJobID(response.data);
          // router.push('/signup/verify-id/confirm');
        }
      })
      .catch((error) => {
        console.log(error);
        handleErrorMessage(error);
      });
  };

  const handleVerfiyJobID = (data) => {
    if (data?.jobId) {
      const dynamicUrl = `/${data.jobId}`;
      API.apiGet('verifyId', dynamicUrl)
        .then((response) => {
          if (
            response?.data &&
            response?.status === 200 &&
            response?.statusText === 'OK'
          ) {
            router.push({
              pathname: '/signup/verify-id/confirm',
              query: { data: encodeData(response.data) },
            });
          }
        })
        .catch((error) => {
          console.log(error);
          handleErrorMessage(error);
        });
    } else {
      toast.error('Failed to verify phone. Please try again later');
    }
  };

  return (
    <div className="row justify-content-center" style={{ minHeight: '100vh' }}>
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
      <div className="row align-items-center justify-content-center flex-column col-md-8 col-12 pe-md-4 pe-0">
        <div
          id="main-alert"
          className="alert alert-danger"
          style={{ display: 'none' }}
        />
        <div
          className="logo login-logo mx-auto"
          style={{
            backgroundImage: `url(https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png)`,
          }}
        />
        <div className="w-100 w-md-75 mx-auto px-4 px-md-2">
          <h6 className="fw-bold ps-0 ms-0">Step 1 of 3</h6>
          <div className="row justify-content-center">
            <div className="col mx-1 bg-blue" style={{ height: '0.2rem' }} />
            <div className="col mx-1 bg-blue-subtle" />
            <div className="col mx-1 bg-blue-subtle" />
          </div>
          <div className="row justify-content-center">
            <div className="col mx-1 ps-0">Verify Identity</div>
            <div className="col mx-1 ps-0">Agree to HIPAA</div>
            <div className="col mx-1 ps-0">Verify address</div>
          </div>
          <h2 className="mt-4 fw-semibold">Verify your identity</h2>
          <h6>
            We use secure digital verification to protect you and your health
            information.
          </h6>
          <div className="bg-secondary-subtle rounded p-4">
            <h4 className="fw-semibold">What you’ll be asked to do</h4>
            <p>
              Take a picture of your valid government photo ID, such as a
              driver’s license or passport
            </p>
            <p className="mb-0">Take a picture of your self (selfie)</p>
          </div>
          <a href="#" className="link-blue my-4 d-block">
            See other acceptable forms of ID
          </a>
          <h4 className="fw-semibold mb-0">Let's get started</h4>
          <p>
            A text message with a link will be sent to you at the number
            provided.
          </p>
          <form id="send-idv-invite-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Mobile Number
              </label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                aria-describedby="phoneHelp"
                name="phone"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <div id="phoneHelp" className="form-text">
                (###)###-###
              </div>
            </div>
            <div className="d-flex">
              <button
                type="submit"
                className="btn btn-primary rounded-pill w-100"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="text-center">
            <hr className="hr-text" data-content="OR" />
            <a
              href="/signup/verify-id/choice"
              className="link-primary text-center d-block"
            >
              Verify another way
            </a>
            <h6 className="text-secondary-subtle mt-4">
              Identity verified through Vouched
            </h6>
            <img src="/img/vouched.png" alt="Vouched" />
          </div>
        </div>
      </div>
    </div>
  );
}
