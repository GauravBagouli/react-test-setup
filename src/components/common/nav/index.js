import { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Import Link for client-side navigation

const Navbar = ({ profile, branding }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  const getStaticLogo = (organization) => {
    return `/path/to/logos/${organization}-logo.png`; // Adjust the path accordingly
  };

  return (
    <nav id="pluto-nav" className="navbar fixed-top navbar-expand-lg navbar-light py-md-2 py-lg-2 shadow-sm border-bottom px-md-4 px-lg-4 bg-white">
      <div className="container-fluid gap-md-8 gap-lg-8">
        <div className='d-flex align-items-center gap-2'>
          <button className="navbar-toggler" type="button" onClick={toggleNav} aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/home" className="text-decoration-none">
            <Image src={ branding?.Organization ? getStaticLogo(branding?.Organization) : "https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png"} width={80} height={30} alt="Logo" />
          </Link>
        </div>

        <div className={`offcanvas offcanvas-start navbar-collapse ${isNavOpen ? 'show' : ''}`} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header justify-content-between w-100">
            <div className="offcanvas-title" id="offcanvasNavbarLabel">
              <Image src={ branding?.Organization ? getStaticLogo(branding?.Organization) : "https://cdn.assets.pluto-service.com/patient-web-clients/pluto/nav.png"} width={80} height={30} alt="Logo" />
            </div>
            <button type="button" className="btn-close" onClick={toggleNav} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body w-100 d-flex justify-content-md-center justify-content-lg-center">
            <div className="navbar-nav d-flex w-lg-75 gap-2 gap-md-4 gap-sm-4 justify-content-lg-around justify-content-xl-around">
              <div className="nav-item">
                <Link className={`nav-link ${profile?.ActiveRole === 'home' ? 'active' : ''}`} href="/home">
                  <i className="fa-solid fa-house mx-2"></i>
                  Home
                </Link>
              </div>

              <div className="nav-item desktop-link">
                <Link className={`nav-link ${profile?.ActiveRole === 'my-health' ? 'active' : ''}`} href={`/my-health/${profile?.Patient?.MyHealthLinks?.[0]}`}>
                  <i className="fa-solid fa-clipboard-user mx-2"></i>
                  My Health
                </Link>
              </div>

              {/* <li className="nav-item dropdown mobile-link">
                <Link className={`nav-link dropdown-toggle d-flex justify-content-between ${profile?.ActiveRole === 'my-health' ? 'active' : ''}`} href="#" role="button" onClick={toggleNav} aria-expanded={isNavOpen}>
                  <span>
                    <i className="fa-solid fa-clipboard-user mx-2"></i>
                    My Health
                  </span>
                  <i className="fa-solid fa-chevron-down fs-4"></i>
                </Link>
                <ul className="dropdown-menu">
                  {profile?.Patient?.MyHealthLinks?.map((link) => (
                    <li key={link}>
                      <Link className="dropdown-item text-capitalize" href={`/my-health/${link}`}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </li> */}

              <div className="nav-item desktop-link">
                <Link className={`nav-link ${profile?.ActiveRole === 'trends' ? 'active' : ''}`} href={`/trends/${profile?.Patient?.TrendsLinks?.[0]}`}>
                  <i className="fa-solid fa-chart-simple mx-2"></i>
                  Trends
                </Link>
              </div>

              {/* <li className="nav-item dropdown mobile-link">
                <Link className={`nav-link dropdown-toggle d-flex justify-content-between ${profile?.ActiveRole === 'trends' ? 'active' : ''}`} href="#" role="button" onClick={toggleNav} aria-expanded={isNavOpen}>
                  <span>
                    <i className="fa-solid fa-chart-simple mx-2"></i>
                    Trends
                  </span>
                  <i className="fa-solid fa-chevron-down fs-4"></i>
                </Link>
                <ul className="dropdown-menu">
                  {profile?.Patient?.TrendsLinks?.map((link) => (
                    <li key={link}>
                      <Link className="dropdown-item text-capitalize" href={`/trends/${link}`}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </li> */}

              <div className="nav-item">
                <Link className={`nav-link ${profile?.ActiveRole === 'timeline' ? 'active' : ''}`} href="/timeline">
                  <i className="fa-solid fa-timeline mx-2"></i>
                  Timeline
                </Link>
              </div>

              <div className="nav-item">
                <Link className={`nav-link ${profile?.ActiveRole === 'studies' ? 'active' : ''}`} href="/studies">
                  <i class="fa-solid fa-file-alt mx-2"></i>
                  Studies
                </Link>
              </div>

              {/* <div className="mt-3 lower-links">
                <li className="nav-item dropdown mobile-link">
                  <Link className={`nav-link dropdown-toggle d-flex justify-content-between ${profile?.ActiveRole === 'settings' ? 'active' : ''}`} href="#" role="button" onClick={toggleNav} aria-expanded={isNavOpen}>
                    <span>
                      <div className={`rounded-circle text-center text-white d-inline-block ${profile?.User?.ActiveRole === 'patient' ? 'bg-secondary' : 'bg-info'}`} style={{ width: '1.7rem', fontSize: '0.7rem', padding: '0.3rem 0.4rem' }}>
                        <i className="fa-solid fa-user"></i>
                      </div>
                      Settings
                    </span>
                    <i className="fa-solid fa-chevron-down fs-4"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-capitalize" href="/account/profile">Profile</Link></li>
                    <li><Link className="dropdown-item text-capitalize" href="/account/change-password">Change Password</Link></li>
                    <li><Link className="dropdown-item text-capitalize" href="/account/hipaa">HIPAA Authorizations</Link></li>
                    <li><Link className="dropdown-item text-capitalize" href="/account/insurance">Insurance</Link></li>
                    <li><Link className="dropdown-item text-capitalize" href="/account/about">About</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${profile?.ActiveRole === 'support' ? 'active' : ''}`} href="/support">
                    <div className={`rounded-circle text-center text-white d-inline-block ${profile?.User?.ActiveRole === 'patient' ? 'bg-secondary' : 'bg-info'}`} style={{ width: '1.7rem', fontSize: '0.7rem', padding: '0.3rem 0.4rem' }}>
                      <i className="fa-solid fa-question"></i>
                    </div>
                    Support
                  </Link>
                </li>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 dropdown">
          <Link href="#" className="d-flex link-dark text-decoration-none " aria-expanded={isUserDropdownOpen}>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className={`rounded-circle p-1 text-center text-white fs-6 d-inline-block ${profile?.User?.ActiveRole === 'patient' ? 'bg-primary' : 'bg-info'}`} style={{ width: '2rem' }}>
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="mx-3">
                <div className="text-capitalize">{profile?.User?.FirstName || "pluto"} {profile?.User?.LastName || "user"}</div>
                {/* <div className="text-capitalize">{profile?.User?.ActiveRole} - Pluto Health</div> */}
              </div>
              <i id="nav-chevron" className="fa-solid fa-chevron-down fs-4 d-none d-md-flex d-lg-flex d-xl-flex" onClick={toggleUserDropdown}></i>
            </div>
          </Link>
          <ul className={`dropdown-menu text-small settings-dropdown shadow ${isUserDropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownUser2">
            <li><Link className="dropdown-item text-capitalize" href="/account/profile">Profile</Link></li>
            <li><Link className="dropdown-item text-capitalize" href="/account/change-password">Change Password</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item text-capitalize" href="/account/hipaa">HIPAA Authorizations</Link></li>
            <li><Link className="dropdown-item text-capitalize" href="/account/insurance">Insurance</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item text-capitalize" href="/account/about">About</Link></li>
            <li><Link className="dropdown-item text-capitalize" href="/support">Support</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item text-capitalize" href="/">Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
