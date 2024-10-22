import React, { useState } from 'react';
import Link from 'next/link';
import SettingsSideNav from '../SettingsSideNav';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
  };

  return (
    <div className="row justify-content-center p-4 p-sm-4 ps-lg-8 mt-6 mt-lg-8">
      {/* Side Nav */}
      <div className="col-lg-3">
        <SettingsSideNav />
      </div>

      {/* Change Password Form */}
      <div className="col-12 col-lg-9 col-xl-8 col-md-6 mx-auto">
        <h2 className="mt-4 page-title mb-5">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="current_password" className="form-label mt-4">Current Password</label>
          <input
            type="password"
            id="current_password"
            className="form-control w-50"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          
          <label htmlFor="new_password" className="form-label mt-4">New Password</label>
          <input
            type="password"
            id="new_password"
            className="form-control w-50"
            value={newPassword}
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
          </div>

          <label htmlFor="repeat_new_password" className="form-label mt-4">Repeat New Password</label>
          <input
            type="password"
            id="repeat_new_password"
            className="form-control w-50"
            value={repeatNewPassword}
            onChange={(e) => setRepeatNewPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-primary mb-3 rounded-pill mt-4 w-50" disabled={!newPassword || newPassword !== repeatNewPassword}>
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
