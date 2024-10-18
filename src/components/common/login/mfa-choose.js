import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import API from '@/helpers/api';
import toast from 'react-hot-toast';
import { handleErrorMessage } from '@/utils/commonFunctions';
import { encodeData } from '@/helpers/auth';

const MFAChoose = ({ mfaAuthenticators, mfaToken, branding, csrfToken }) => {
  const router = useRouter();
  const [mfaAuthenticatorList, setMfaAuthenticatorList] =
    useState(mfaAuthenticators);
  const [selectedMfaAuthenticator, setSelectedMfaAuthenticator] = useState({});

  useEffect(() => {
    setMfaAuthenticatorList(mfaAuthenticators);
    setSelectedMfaAuthenticator(mfaAuthenticators?.[0]?.id);
  }, [mfaAuthenticators?.length]);

  const handleSend = () => {
    let mfaAuthenticator = mfaAuthenticatorList.find(
      (item) => item.id === selectedMfaAuthenticator,
    );
    if (!mfaAuthenticator) {
      return toast.error('Please select an authenticator');
    }
    let payload = {
      id: mfaAuthenticator?.id,
      mfa_token: mfaToken,
    };
    API.apiPost('mfaChoose', payload)
      .then((response) => {
        if (
          response?.data &&
          response?.status === 200 &&
          response?.statusText === 'OK'
        ) {
          let queryData = {
            ...response?.data,
            mfa_token: mfaToken,
          };
          router.push({
            pathname: '/login/mfa/confirm',
            query: { data: encodeData(queryData) },
          });
        }
      })
      .catch((error) => {
        console.log(error);
        handleErrorMessage(error);
      });
  };

  const handleMfaAuthenticatorChange = (e) => {
    setSelectedMfaAuthenticator(e?.target?.value);
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
              {mfaAuthenticatorList?.map((authenticator) => (
                <div className="form-check" key={authenticator?.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="id"
                    value={authenticator?.id}
                    id={authenticator?.id}
                    checked={authenticator?.id === selectedMfaAuthenticator}
                    onChange={(e) => handleMfaAuthenticatorChange(e)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={authenticator?.id}
                  >
                    {authenticator?.name}
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
