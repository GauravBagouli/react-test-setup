import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import SettingsSideNav from '../SettingsSideNav';
import DetailsEdit from '../detailsEdit';

const ProfileNames = () => {
  const [profileData, setProfileData] = useState({
    legal_name: "Celeste Yang",
    what_should_we_call_you: "Celeste Yang",
    married_name: "Celeste Yang",
    maiden_name: "Celeste Yang",
  });

  // Array containing the labels, field names, and editable status
  const nameFields = [
    { label: "Legal Name", field: "legal_name", isEditable: false },
    { label: "What should we call you?", field: "what_should_we_call_you", isEditable: true },
    { label: "Married Name", field: "married_name", isEditable: true },
    { label: "Maiden Name", field: "maiden_name", isEditable: true },
  ];

  return (
    <DetailsEdit
      nameFields={nameFields}
      profileData={profileData}
      setProfileData={setProfileData}
      title="Names"
    />
  );
};

export default ProfileNames;
