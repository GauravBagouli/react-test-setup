import React, { useEffect, useRef, useState } from 'react';
import SignaturePad from 'signature_pad';
import Quill from 'quill';
import { useRouter } from 'next/router';
import API from '@/helpers/api';
import { handleErrorMessage } from '@/utils/commonFunctions';

const HipaaSignup = () => {
  const router = useRouter();
  const [hipaaAuth, setHipaaAuth] = useState(
    '<div style="margin: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14px; text-align: justify; font-weight: 500;"> <div style="text-align: center; font-weight: 800;"> <p style="font-size:18px;"> Pluto Health Inc. </p> <p style="font-size:16px;"> HIPAA AUTHORIZATION </p> </div> <hr/> <p> You are entitled to keep your protected health information private. This HIPAA Authorization Form allows you to grant a third party involved in managing your health access to your protected health information “PHI”) that otherwise would not be permitted under HIPAA. By indicating your consent below, you authorize Pluto Health to obtain and disclose the protected health information described below to the persons or entities identified in this form. </p> <p> I hereby authorize the release of all PHI created, stored, or transferred to Pluto Health which includes but may not be limited to diagnosis, treatment, and health history information, including: <ul> <li> Laboratory and diagnostic test information and results, </li> <li> Medical diagnoses received, date of diagnosis, and </li> <li> Medical treatment received, such as treatment plans, prescription medicine, exams, etc. </li> </ul> </p> <p> <span style="font-weight: 600;"> This information may be released to: </span> <ul> <li> Pluto Health employees and affiliates. </li> <li> Third parties involved directly in your care. </li> </ul> </p> <p> <span style="font-weight: 600;"> This information will not be released: </span> <ul> <li> To any parties that are not involved in your care. </li> <li> To any parties that you are not aware of or have been notified of. </li> </ul> </p> <p> <span style="font-weight: 600;"> This information may be used for the purpose of: </span> <ul> <li> Coordinating your care and treatment recommendations, </li> <li> Suggesting preventive health clinical services; </li> <li> Informing you of clinical trials or studies; and </li> <li> Informing or tailoring your use of their products and services. </li> </ul> </p> <p> <span style="font-weight: 600;"> I also understand and agree to the following: </span> <ul> <li> I will receive a copy of this authorization form for my records. </li> <li> I may refuse to provide this authorization. <span style="font-weight: 600;"> If I do not agree to this authorization, my health care services received through Pluto Health will not be affected. </span> </li> <li> Any information used or disclosed because I have agreed to this authorization may no longer be protected by privacy laws and may be subject to re-disclosure by the person or organization receiving it. </li> <li> I have the right to revoke this authorization at any time by doing so in writing to <a href="mailto:hello@pluto.health">hello@pluto.health</a> or Pluto Health, Inc, Venture X, 600 Park Offices Dr, Suite 300, Durham , NC 27709 </li> <li> Any revocation of this authorization by me will not apply to actions that have already been taken regarding the sharing of my protected health information during the period of time that my authorization was effective. </li> <li> If this authorization has not been revoked, it will end two years from the date of HIPAA Authorization acceptance. </li> </ul> </p> <p> <span style="font-weight: 600;"> I have read and had an opportunity to ask questions about this authorization. </span> </p> <hr/> </div>',
  );
  const signaturePadRef = useRef(null);
  const canvasRef = useRef(null);
  const [signature, setSignature] = useState('');
  const quillRef = useRef(null);

  useEffect(() => {
    const quill = new Quill('#hipaa-container', {
      theme: 'snow',
      modules: {
        toolbar: false,
      },
      readOnly: true,
    });
    quillRef.current = quill;

    const canvas = canvasRef.current;
    if (canvas) {
      const signaturePad = new SignaturePad(canvas);
      signaturePadRef.current = signaturePad;
    }

    return () => {
      if (signaturePadRef.current) {
        signaturePadRef.current.off();
      }
    };
  }, []);

  const handleCancel = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const signatureData = signaturePadRef.current.toDataURL();
    setSignature(signatureData);
    API.apiPost('hippaAgree', { signature_string: signatureData })
      .then((response) => {
        if (
          response?.data &&
          response?.status === 200 &&
          response?.statusText === 'OK'
        ) {
          router.push('/signup/addresses');
        }
      })
      .catch((error) => {
        console.log(error);
        handleErrorMessage(error);
      });
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
              <small>Access to free or low cost treatment</small>
            </div>
          </li>
        </ul>
      </div>

      <div className="row align-items-center justify-content-center flex-column col-12 col-md-8 py-4 pe-0">
        <div
          className="logo login-logo mx-auto"
          style={{
            backgroundImage: `url(https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png)`,
          }}
        ></div>

        <div className="w-100 w-md-75 mx-auto my-4 px-5 px-md-2">
          <h6 className="fw-bold ps-0 ms-0">Step 2 of 3</h6>
          <div className="row justify-content-center">
            <div
              className="col mx-1 bg-blue"
              style={{ height: '0.2rem' }}
            ></div>
            <div className="col mx-1 bg-blue"></div>
            <div className="col mx-1 bg-blue-subtle"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col mx-1 ps-0">Verify Identity</div>
            <div className="col mx-1 ps-0">Agree to HIPAA</div>
            <div className="col mx-1 ps-0">Verify address</div>
          </div>

          <h2 className="mt-4 fw-semibold">HIPAA Authorization</h2>

          <div
            id="hipaa-container"
            className="border-opacity-0 h-auto ql-container ql-snow ql-disabled"
          >
            <div dangerouslySetInnerHTML={{ __html: hipaaAuth }} />
          </div>

          <h3 className="mt-4 fw-semibold">Your signature below</h3>
          <canvas
            ref={canvasRef}
            id="signature-pad"
            className="signature-pad bg-secondary-subtle w-100"
            height="80"
          ></canvas>

          <form
            id="signup-hipaa-form"
            method="post"
            action="/signup/hipaa"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              id="signature_string"
              name="signature_string"
              value={signature}
            />
            <div className="d-flex pb-5">
              <button
                type="button"
                class="btn rounded-pill btn-outline-primary d-block w-100 mx-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn rounded-pill btn-primary d-blcok w-100 mx-2"
              >
                I agree to terms
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HipaaSignup;
