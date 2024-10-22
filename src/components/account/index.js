import Link from 'next/link';
import { useRouter } from 'next/router';
import SettingsSideNav from './SettingsSideNav';
// import '../../styles/profile.css';

const Profile = () => {
  const router = useRouter();

  const handleEditLink = (section) => `/account/profile/${section}`;

  return (
    <div className="row justify-content-center p-4 p-sm-4 ps-lg-8 mt-6 mt-lg-8">
      <div className="col-lg-3">
        <SettingsSideNav />
      </div>
      <div className="col-12 col-lg-9 col-xl-8 col-md-6 mx-auto">
        <h2 className="mt-4 page-title mb-5">Profile</h2>
        <p>Manage your profile settings below.</p>

        {/* Names Section */}
        <div className="d-flex justify-content-between">
          <div>
            <h4>Names</h4>
            <h6>Legal</h6>
            <h5>Celeste Yang</h5>
            <h6>What should we call you?</h6>
            <h5>Cee Cee</h5>
          </div>
          <div>
            <Link href={handleEditLink('names')} passHref legacyBehavior>
              <a className="profile-drilldown-btn rounded-circle p-1 text-center text-gray bg-secondary-subtle fs-6 d-inline-block border-0">
                <i className="fa-solid fa-pen"></i>
              </a>
            </Link>
          </div>
        </div>

        <hr />

        {/* Addresses Section */}
        <div className="d-flex justify-content-between">
          <div>
            <h4>Addresses</h4>
            <h6>Primary</h6>
            <h5>395 West 12th street</h5>
            <h6>Mailing</h6>
            <h5>12332 state street</h5>
          </div>
          <div>
            <Link href={handleEditLink('addresses')} passHref legacyBehavior>
              <a className="profile-drilldown-btn rounded-circle p-1 text-center text-gray bg-secondary-subtle fs-6 d-inline-block border-0">
                <i className="fa-solid fa-pen"></i>
              </a>
            </Link>
          </div>
        </div>

        <hr />

        {/* Phone Numbers Section */}
        <div className="d-flex justify-content-between">
          <div>
            <h4>Phone numbers</h4>
            <h6>Primary</h6>
            <h5>(424) 395-5508</h5>
            <h6>Cell</h6>
            <h5>(424) 395-5507</h5>
          </div>
          <div>
            <Link href={handleEditLink('phones')} passHref legacyBehavior>
              <a className="profile-drilldown-btn rounded-circle p-1 text-center text-gray bg-secondary-subtle fs-6 d-inline-block border-0">
                <i className="fa-solid fa-pen"></i>
              </a>
            </Link>
          </div>
        </div>

        <hr />

        {/* Email Section */}
        <div className="d-flex justify-content-between">
          <div>
            <h4>Email</h4>
            <h5>celeste.yang@pluto.health</h5>
          </div>
        </div>

        <hr />

        {/* Date of Birth Section */}
        <div className="d-flex justify-content-between">
          <div>
            <h4>Date of birth</h4>
            <h5>01/01/1980</h5>
          </div>
        </div>

        <hr />

        {/* Gender Section */}
        <div className="d-flex justify-content-between">
          <div>
            <h4>Born biologically as</h4>
            <h5>Female</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
