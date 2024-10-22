import Image from 'next/image'; // Import Next.js Image component
import SettingsSideNav from '../SettingsSideNav'; // Adjust the import path as necessary

const AboutPage = ({ branding, active }) => {
  return (
    <div className="row justify-content-center p-4 p-sm-4 ps-lg-8 mt-6 mt-lg-8">
      <div className="col-lg-3">
        <SettingsSideNav />
      </div>
      <div className="col-12 col-lg-9 col-xl-8 col-md-6 mx-auto">
        <h2 className="mt-4 page-title mb-5">About</h2>
        <div className="text-center mt-7">
          <div
            className="logo login-logo mx-auto"
            style={{
              backgroundImage: `url(https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png)`,
            }}
          />
          <div className="mt-4">
            <p className="my-1 fs-6">Pulse Dashboard</p>
            <p className="my-1 fs-6">v4.9.26</p>
            <p className="my-1 fs-6">Build 51</p>
            <p className="my-1 fs-6">&copy; 2024 Pluto Health Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
