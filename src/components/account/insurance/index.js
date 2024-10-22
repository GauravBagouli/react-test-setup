import React from 'react';
import SettingsSideNav from '../SettingsSideNav';

export default function InsuranceComponent() {
    return <>
        <div className="row justify-content-center p-4 p-sm-4 ps-lg-8 mt-6 mt-lg-8">
            <div className="col-lg-3">
                <SettingsSideNav />
            </div>

            {/* HIPAA Authorizations Table */}
            <div className="col-12 col-lg-9 col-xl-8 col-md-6 mx-auto">
                <h2 className="mb-5 page-title mt-4">Insurance</h2>
                <div></div>
            </div>
        </div>
    </>
}