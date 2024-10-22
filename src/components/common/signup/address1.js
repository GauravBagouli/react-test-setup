import React, { useState } from 'react';
import { IconTrash } from '@tabler/icons-react';
import API from '@/helpers/api';
import { handleErrorMessage } from '@/utils/commonFunctions';

const initialAddressData = {
  address: '',
  address1: '',
  address2: '',
  apartmentNumber: '',
  city: '',
  state: 'TN',
  zip: '',
};

const AddressForm = ({ branding }) => {
  const [previousAddresses, setPreviousAddresses] = useState([
    initialAddressData,
  ]);
  const [primaryAdress, setPrimaryAddress] = useState({
    ...initialAddressData,
    IsPrimary: true,
  });

  const addAddressField = () => {
    setPreviousAddresses([...previousAddresses, initialAddressData]);
  };

  const removeAddressField = (index) => {
    const updatedAddresses = previousAddresses.filter((_, i) => i !== index);
    setPreviousAddresses(updatedAddresses);
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    let allAddresses = [...previousAddresses, primaryAdress];
    const formData = new URLSearchParams();
    allAddresses.forEach((address, index) => {
      formData.append(`addresses[${index}][Address]`, address.address);
      formData.append(
        `addresses[${index}][ApartmentNumber]`,
        address.apartmentNumber,
      );
      formData.append(`addresses[${index}][City]`, address.city);
      formData.append(`addresses[${index}][State]`, 'TN');
      formData.append(`addresses[${index}][Zip]`, address.zip);
    });
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    API.apiPost('addAddresses', formData.toString(), headers)
      .then((response) => {
        if (
          response?.data &&
          response?.status === 200 &&
          response?.statusText === 'OK'
        ) {
          router.push('/home');
        }
      })
      .catch((error) => {
        console.log(error);
        handleErrorMessage(error);
      });
  };

  const handlePrimaryAddress = (e) => {
    setPrimaryAddress({ ...primaryAdress, [e.target.name]: e.target.value });
  };

  const handlePreviousAddress = (e, index) => {
    const { name, value } = e.target;
    let updatedPreviousAddresses = [...previousAddresses];
    updatedPreviousAddresses[index] = {
      ...updatedPreviousAddresses[index],
      [name]: value,
    };
    setPreviousAddresses(updatedPreviousAddresses);
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

      <div className="row align-items-center justify-content-center flex-column col-12 col-md-8 pe-0">
        <div
          id="main-alert"
          className="alert alert-danger"
          style={{ display: 'none' }}
        ></div>

        <div
          className="logo login-logo mx-auto"
          style={{
            backgroundImage: `url(https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png)`,
            height: '100px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="w-100 w-md-75 mx-auto my-4 px-5 px-md-2">
          <h6 className="fw-bold ps-0 ms-0">Step 3 of 3</h6>
          <div className="row justify-content-center">
            <div
              className="col mx-1 bg-blue"
              style={{ height: '0.2rem' }}
            ></div>
            <div className="col mx-1 bg-blue"></div>
            <div className="col mx-1 bg-blue"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col mx-1 ps-0">Verify Identity</div>
            <div className="col mx-1 ps-0">Agree to HIPAA</div>
            <div className="col mx-1 ps-0">Verify address</div>
          </div>

          <h2 className="mt-4 fw-semibold">Address information</h2>
          <h6>
            Your address information is needed to provide a complete picture of
            your health.
          </h6>

          <h4 className="fw-semibold mb-0 mt-4">Current Address</h4>
          <p>
            Please confirm the address you provided when receiving medical care.
          </p>

          <form
            method="post"
            action="#"
            id="addAddressesForm"
            className="row"
            onSubmit={handleSubmitAddress}
          >
            <div className="row g-3 mb-3">
              <div className="col-6">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  onChange={handlePrimaryAddress}
                />
              </div>
              <div className="col-6">
                <label htmlFor="apartmentNumber" className="form-label">
                  Apt/Suite
                </label>
                <input
                  name="apartmentNumber"
                  type="text"
                  className="form-control"
                  onChange={handlePrimaryAddress}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  className="form-control"
                  onChange={handlePrimaryAddress}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  name="state"
                  className="form-select"
                  onChange={handlePrimaryAddress}
                >
                  <option selected>TN</option>
                </select>
              </div>
              <div className="col-md-4 mb-4">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input
                  name="zip"
                  type="text"
                  className="form-control"
                  onChange={handlePrimaryAddress}
                />
              </div>
            </div>

            <h4 className="fw-semibold mb-0 mt-4">Previous Addresses</h4>
            <p>
              Please include all addresses you have used when receiving medical
              care to help us find health centers you have visited.
            </p>

            <div id="previousAddresses">
              {previousAddresses?.map((_, index) => (
                <div key={index} className="row g-3 mb-3 position-relative">
                  {index >= 1 && (
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="delete-address-row btn"
                        onClick={() => removeAddressField(index)}
                      >
                        <IconTrash size={24} />
                      </button>
                    </div>
                  )}
                  <div className="col-6">
                    <label htmlFor={`address`} className="form-label">
                      Address
                    </label>
                    <input
                      name={`address`}
                      type="text"
                      className="form-control"
                      onChange={(e) => handlePreviousAddress(e, index)}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor={`apartmentNumber`} className="form-label">
                      Apt/Suite
                    </label>
                    <input
                      name={`apartmentNumber`}
                      type="text"
                      className="form-control"
                      onChange={(e) => handlePreviousAddress(e, index)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`city`} className="form-label">
                      City
                    </label>
                    <input
                      name={`city`}
                      type="text"
                      className="form-control"
                      onChange={(e) => handlePreviousAddress(e, index)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor={`state`} className="form-label">
                      State
                    </label>
                    <select
                      name={`state`}
                      className="form-select"
                      value={previousAddresses[index].state || ''}
                      onChange={(e) => handlePreviousAddress(e, index)}
                    >
                      <option selected>TN</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-4">
                    <label htmlFor={`zip`} className="form-label">
                      Zip
                    </label>
                    <input
                      name={`zip`}
                      type="text"
                      className="form-control"
                      onChange={(e) => handlePreviousAddress(e, index)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              id="addAddressButton"
              className="btn btn-outline-primary rounded-pill w-100 mt-4"
              onClick={addAddressField}
            >
              Add another address
            </button>
            <button
              type="submit"
              className="btn btn-primary rounded-pill w-100 mt-4"
            >
              Complete profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
