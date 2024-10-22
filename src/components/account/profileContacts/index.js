import { useState } from 'react';
import DetailsEdit from '../detailsEdit';

const ProfileNames = () => {
  const [profileData, setProfileData] = useState({
    primary: "(424) 395-5508",
    cell: "(424) 395-5507",
  });

  // Array containing the labels, field names, and editable status
  const nameFields = [
    { label: "Primary", field: "primary", isEditable: true },
    { label: "Cell", field: "cell", isEditable: true },

  ];

  return (
    <DetailsEdit
      nameFields={nameFields}
      profileData={profileData}
      setProfileData={setProfileData}
      title="Phone Numbers"
    />
  );
};

export default ProfileNames;
