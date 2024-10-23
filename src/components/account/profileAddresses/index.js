import { useState, useRef, useEffect } from 'react';
import DetailsEdit from '../detailsEdit';

const profileAddresses = () => {
  const [profileData, setProfileData] = useState({
    primary_address: "new york, ny",
    mailing_address: "washington, dc",
  });

  // Array containing the labels, field names, and editable status
  const nameFields = [
    { label: "Primary Address", field: "primary_address", isEditable: true },
    { label: "Mailing Address", field: "mailing_address", isEditable: true },
  ];

  return (
    <DetailsEdit
      nameFields={nameFields}
      profileData={profileData}
      setProfileData={setProfileData}
      title="Addresses"
    />
  );
};

export default profileAddresses;
