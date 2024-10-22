import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';

const SettingsSideNav = ({ branding }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router; // Get the current path
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  return (
    <>
      <div className="d-none d-lg-block">
        <h5 className="text-uppercase ps-4 mt-4 d-none d-lg-block d-xl-block">Settings</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/account/profile" passHref legacyBehavior>
              <a className={`nav-link text-capitalize ${pathname.includes('/account/profile') ? 'active' : 'link-secondary'}`}>
                Profile
              </a>  
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/account/change-password" passHref legacyBehavior>
              <a className={`nav-link text-capitalize ${pathname.includes('/account/change-password') ? 'active' : 'link-secondary'}`}>
                Change Password
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/account/hipaa" passHref legacyBehavior>
              <a className={`nav-link text-capitalize ${pathname.includes('/account/hipaa') ? 'active' : 'link-secondary'}`}>
                HIPAA Authorizations
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/account/insurance" passHref legacyBehavior>
              <a className={`nav-link text-capitalize ${pathname.includes('/account/insurance') ? 'active' : 'link-secondary'}`}>
                Insurance
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/account/about" passHref legacyBehavior>
              <a className={`nav-link text-capitalize ${pathname.includes('/account/about') ? 'active' : 'link-secondary'}`}>
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='d-flex gap-2 d-block d-lg-none d-xl-none'>
        <div onClick={toggleNav} className='d-flex gap-2 mt-4'>
          <div>
            <i id="nav-chevron" className="fa-solid fa-chevron-down fs-4 d-md-flex d-lg-flex d-xl-flex" style={{ transform: "rotate(90deg)" }} />
          </div>
          <div>
            Settings
          </div>
        </div>
        <div className={`offcanvas offcanvas-start navbar-collapse mt-6 ${isNavOpen ? 'show' : ''}`} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ zIndex: "1000" }}>
          <div className="offcanvas-body w-100 d-flex flex-column mt-4">
            <div className="offcanvas-header justify-content-between w-100 p-0 pe-4">
              <button type="button" className="btn-close" aria-label="Close" onClick={toggleNav}></button>
            </div>
            <div className="navbar-nav d-flex w-lg-75 justify-content-md-between justify-content-lg-between">
              <div className="nav-item">
                <Link href="/account/profile" passHref legacyBehavior>
                  <a className={`nav-link text-capitalize ${pathname.includes('/account/profile') ? 'active' : 'link-secondary'}`}>
                    Profile
                  </a>
                </Link>
              </div>

              <div className="nav-item desktop-link">
                <Link href="/account/change-password" passHref legacyBehavior>
                  <a className={`nav-link text-capitalize ${pathname.includes('/account/change-password') ? 'active' : 'link-secondary'}`}>
                    Change Password
                  </a>
                </Link>
              </div>

              <div className="nav-item desktop-link">
                <Link href="/account/hipaa" passHref legacyBehavior>
                  <a className={`nav-link text-capitalize ${pathname.includes('/account/hipaa') ? 'active' : 'link-secondary'}`}>
                    HIPAA Authorizations
                  </a>
                </Link>
              </div>

              <div className="nav-item">
                <Link href="/account/insurance" passHref legacyBehavior>
                  <a className={`nav-link text-capitalize ${pathname.includes('/account/insurance') ? 'active' : 'link-secondary'}`}>
                    Insurance
                  </a>
                </Link>
              </div>

              <div className="nav-item">
                <Link href="/account/about" passHref legacyBehavior>
                  <a className={`nav-link text-capitalize ${pathname.includes('/account/about') ? 'active' : 'link-secondary'}`}>
                    About
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsSideNav;
