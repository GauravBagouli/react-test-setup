import { useState } from 'react';
import Image from 'next/image'; 
import { useRouter } from 'next/router';

const Navbar = ({ profile, branding }) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isTrendsHover, setIsTrendsHover] = useState(false); // State to control the submenu visibility

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  const getStaticLogo = (organization) => {
    return `/path/to/logos/${organization}-logo.png`; 
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <nav id="pluto-nav" className="navbar fixed-top navbar-expand-lg navbar-light py-md-2 py-lg-2 shadow-sm border-bottom px-md-4 px-lg-4 bg-white">
      <div className="container-fluid gap-md-8 gap-lg-8">
        <div className='d-flex align-items-center gap-2'>
          <button className="navbar-toggler" type="button" onClick={toggleNav} aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div onClick={() => handleNavigation('/home')} className="text-decoration-none">
            <Image src={branding?.Organization ? getStaticLogo(branding?.Organization) : "https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png"} width={80} height={30} alt="Logo" />
          </div>
        </div>

        <div className={`offcanvas offcanvas-start navbar-collapse ${isNavOpen ? 'show' : ''}`} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header justify-content-between w-100">
            <div className="offcanvas-title" id="offcanvasNavbarLabel">
              <Image src={branding?.Organization ? getStaticLogo(branding?.Organization) : "https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png"} width={80} height={30} alt="Logo" />
            </div>
            <button type="button" className="btn-close" onClick={toggleNav} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body w-100 d-flex justify-content-md-center justify-content-lg-center">
            <div className="navbar-nav d-flex w-lg-75 gap-2 gap-md-4 gap-sm-4 justify-content-lg-around justify-content-xl-around">
              <div className="nav-item">
                <button className={`nav-link ${profile?.ActiveRole === 'home' ? 'active' : ''}`} onClick={() => handleNavigation('/home')}>
                  <i className="fa-solid fa-house mx-2"></i>
                  Home
                </button>
              </div>

              <div className="nav-item desktop-link">
                <button className={`nav-link ${profile?.ActiveRole === 'my-health' ? 'active' : ''}`} onClick={() => handleNavigation(`/my-health`)}>
                  <i className="fa-solid fa-clipboard-user mx-2"></i>
                  My Health
                </button>
              </div>

              <div 
                className="nav-item desktop-link" 
                onMouseEnter={() => setIsTrendsHover(true)} 
                onMouseLeave={() => setIsTrendsHover(false)}
              >
                <button className={`nav-link ${profile?.ActiveRole === 'trends' ? 'active' : ''}`}>
                  <i className="fa-solid fa-chart-simple mx-2"></i>
                  Trends
                </button>
                {/* Submenu card */}
                {isTrendsHover && (
                  <div className="card position-absolute" style={{ zIndex: 1000 }}>
                    <div className="card-body d-flex">
                      <div className='w-100'>
                        <h6 className='px-2 text-center'>Vitals</h6>
                        <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/bmi')}>BMI</button></div>
                        <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/heart-rate')}>Health Rate</button></div>
                        {/* <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/blood-pressure')}>Blood Pressure</button></div> */}
                        <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/blood-oxygen')}>Blood Oxygen</button></div>
                        <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/respiratory-rate')}>Respiratory Rate</button></div>
                        <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/weight')}>Weight</button></div>
                      </div>
                      {/* <div className='w-100'>
                        <h6 className='px-2 text-center'>Labs</h6>
                        <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/hdl-ldl')}>LDL & HDL</button></div>
                        <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/cholesterol')}>Total Cholesterol</button></div>
                        <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/creatinine')}>Creatinine</button></div>
                        <div className='p-2'><button className="dropdown-item" onClick={() => handleNavigation('/pws/trends/hba1c')}>HbA1c</button></div>
                      </div> */}
                    </div>
                  </div>
                )}
              </div>

              <div className="nav-item">
                <button className={`nav-link ${profile?.ActiveRole === 'timeline' ? 'active' : ''}`} onClick={() => handleNavigation('/timeline')}>
                  <i className="fa-solid fa-timeline mx-2"></i>
                  Timeline
                </button>
              </div>

              <div className="nav-item">
                <button className={`nav-link ${profile?.ActiveRole === 'studies' ? 'active' : ''}`} onClick={() => handleNavigation('/studies')}>
                  <i className="fa-solid fa-file-alt mx-2"></i>
                  Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 dropdown">
          <div role="button" onClick={toggleUserDropdown} className="d-flex link-dark text-decoration-none" aria-expanded={isUserDropdownOpen}>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className={`rounded-circle p-1 text-center text-white fs-6 d-inline-block ${profile?.User?.ActiveRole === 'patient' ? 'bg-primary' : 'bg-info'}`} style={{ width: '2rem' }}>
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="mx-3">
                <div className="text-capitalize">{profile?.User?.FirstName || "pluto"} {profile?.User?.LastName || "user"}</div>
              </div>
              <i id="nav-chevron" className="fa-solid fa-chevron-down fs-4 d-none d-md-flex d-lg-flex d-xl-flex"></i>
            </div>
          </div>
          <ul className={`dropdown-menu text-small settings-dropdown shadow ${isUserDropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownUser2">
            <li><button className="dropdown-item text-capitalize" onClick={() => handleNavigation('/account/profile')}>Profile</button></li>
            <li><button className="dropdown-item text-capitalize" onClick={() => handleNavigation('/account/change-password')}>Change Password</button></li>
            <li><button className="dropdown-item text-capitalize" onClick={() => handleNavigation('/account/hipaa')}>HIPAA Authorizations</button></li>
            <li><button className="dropdown-item text-capitalize" onClick={() => handleNavigation('/account/insurance')}>Insurance</button></li>
            <li><button className="dropdown-item text-capitalize" onClick={() => handleNavigation('/account/about')}>About</button></li>
            <li><button className="dropdown-item text-capitalize" onClick={() => handleNavigation('/support')}>Support</button></li>
            <li><button className="dropdown-item text-capitalize" onClick={() => handleNavigation('/')}>Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
