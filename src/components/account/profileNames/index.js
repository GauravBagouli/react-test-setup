import Link from 'next/link';
import { useRouter } from 'next/router';
import SettingsSideNav from '../SettingsSideNav';
// import '../../styles/profile.css';

const ProfileNames = () => {
  const router = useRouter();

  const handleEditLink = (section) => `/account/profile/${section}`;
  const EditButtons = () => (
    <>
      <button className="rounded-circle p-1 text-center text-gray bg-secondary-subtle fs-6 d-inline-block border-0" style={{ width: '2.25rem' }}>
        <i className="fa-solid fa-pen"></i>
      </button>
      <button className="rounded-circle p-1 text-center text-gray bg-secondary-subtle fs-6 d-inline-block border-0" style={{ width: '2.25rem' }}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </>
  );

  return (
    <div className="row justify-content-center p-4 p-sm-4 ps-lg-8 mt-6 mt-lg-8">
      <div className="col-lg-3">
        <SettingsSideNav />
      </div>
      <div className="col-12 col-lg-9 col-xl-8 col-md-6 mx-auto">
        {/* <h2 className="mt-4 page-title mb-5">Profile</h2> */}
        <div id="names" className="profile-drilldown">
          <Link href="/account/profile" passHref legacyBehavior>
            <a className='nav-link d-flex gap-2 mb-4' style={{ width: 'fit-content' }}>
              <i id="nav-chevron" className="fa-solid fa-chevron-left fs-4 d-md-flex d-lg-flex d-xl-flex " />
              Profile
            </a>
          </Link>
    
          <div>Edit profile</div>
          <h2 className="page-title">Names</h2>
          <p>Manage your settings below.</p>

          {/* Legal Name */}
          <div className="d-flex justify-content-between">
            <div>
              <h4>Legal Name</h4>
              <h5>Celeste Yang</h5>
            </div>
          </div>

          <hr />

          {/* Preferred Name */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4>What should we call you?</h4>
              <h5>Celeste Yang</h5>
            </div>
            <div>
              <EditButtons />
            </div>
          </div>

          <hr />

          {/* Married Name */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4>Married Name</h4>
              <h5>Celeste Yang</h5>
            </div>
            <div>
              <EditButtons />
            </div>
          </div>

          <hr />

          {/* Maiden Name */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4>Maiden Name</h4>
              <h5>Celeste Yang</h5>
            </div>
            <div>
              <EditButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNames;

