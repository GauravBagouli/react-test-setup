import React from 'react';
import SettingsSideNav from '../SettingsSideNav';

export default function InsuranceComponent() {
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        insurance: ['Insurance A', 'Insurance B'] // or [] if no insurance
      };
    const { firstName, lastName, insurance } = user;
    const InsuranceCard = ({ insurance, firstName, lastName }) => {
        return (
            <div className="insurance-card">
                <h4>Insurance for {firstName} {lastName}</h4>
                <p>{insurance}</p>
            </div>
        );
    };
    return <>
        <div className="row justify-content-center p-4 p-sm-4 ps-lg-8 mt-6 mt-lg-8">
            <div className="col-lg-3">
                <SettingsSideNav />
            </div>

            {/* HIPAA Authorizations Table */}
            <div className="col-12 col-lg-9 col-xl-8 col-md-6 mx-auto">
                <h2 className="mb-5 page-title mt-4">Insurance</h2>
                <div>
                    <div id="tabInsurance" className="tab-pane">
                        <div className="card-body p-lg-5 p-md-4 row">
                            {insurance && insurance.length > 0 ? (
                                insurance.map((ins, index) => (
                                    <InsuranceCard
                                        key={index}
                                        insurance={ins}
                                        firstName={firstName}
                                        lastName={lastName}
                                    />
                                ))
                            ) : (
                                <div className="text-center col-12">
                                    <h2 className="dark-blue">
                                        Sorry, <span style={{ textTransform: 'capitalize' }}>{firstName}</span>!
                                    </h2>
                                    <p className="text-muted">
                                        We could not find any of your current or previous insurance information.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}