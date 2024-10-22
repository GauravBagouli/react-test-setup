import React, { useEffect, useRef, useState } from 'react';
import SettingsSideNav from './SettingsSideNav';
import Link from 'next/link';

export default function DetailsEdit({ nameFields, profileData , setProfileData, title }) {
    // const [profileData, setProfileData] = useState({});
    const [input2Edit, setInput2Edit] = useState('');
    const inputRefs = useRef({});

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Set the input field to focus after editing or deleting
    useEffect(() => {
        if (input2Edit && inputRefs.current[input2Edit]) {
            inputRefs.current[input2Edit].focus();
        }
    }, [input2Edit]);

    // Edit Buttons for each field
    const EditButtons = ({ editField, isEditable }) => (
        isEditable ? (
            <div className='d-flex gap-2'>
                <button
                    className="rounded-circle p-1 text-center text-gray bg-secondary-subtle fs-6 d-inline-block border-0"
                    style={{ width: '2.25rem' }}
                    onClick={() => setInput2Edit(editField)}
                >
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button
                    className="rounded-circle p-1 text-center text-gray bg-secondary-subtle fs-6 d-inline-block border-0"
                    style={{ width: '2.25rem' }}
                    onClick={() => {
                        setProfileData({ ...profileData, [editField]: "" });
                        setInput2Edit(editField);
                    }}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        ) : null // If the field is not editable, hide the edit buttons
    );
    return <>
        <div className="row justify-content-center p-4 p-sm-4 ps-lg-8 mt-6 mt-lg-8">
            <div className="col-lg-3">
                <SettingsSideNav />
            </div>
            <div className="col-12 col-lg-9 col-xl-8 col-md-6 mx-auto pt-4">
                <div id="names" className="profile-drilldown">
                    <Link href="/account/profile" passHref legacyBehavior>
                        <a className='nav-link d-flex gap-2 mb-4' style={{ width: 'fit-content' }}>
                            <i id="nav-chevron" className="fa-solid fa-chevron-left fs-4 d-md-flex d-lg-flex d-xl-flex " />
                            Profile
                        </a>
                    </Link>

                    <div>Edit profile</div>
                    <h2 className="page-title">{title}</h2>
                    <p>Manage your settings below.</p>

                    {/* Dynamic Rendering of Name Fields */}
                    {nameFields.map(({ label, field, isEditable }) => (
                        <div key={field}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h4>{label}</h4>
                                    <input
                                        ref={(el) => inputRefs.current[field] = el}  // Set the ref for each input
                                        type="text"
                                        name={field}
                                        value={profileData[field]}
                                        className={`${input2Edit !== field ? 'border-0' : ''} bg-transparent`}
                                        onChange={handleInputChange}
                                        onBlur={() => setInput2Edit('')}
                                        disabled={!isEditable || input2Edit !== field} // Disable if not editable or not in edit mode
                                    />
                                </div>
                                <EditButtons editField={field} isEditable={isEditable} />
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
};