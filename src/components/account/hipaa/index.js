import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import React, { useEffect } from 'react';
import SettingsSideNav from '../SettingsSideNav';

const HipaaAuthorizations = () => {
//   useEffect(() => {
//     // Make sure the DataTables script initializes the table
//     if (typeof window !== 'undefined') {
//       require('datatables.net')();
//       $('#hipaaAuthorizationsTable').DataTable();
//     }
//   }, []);

  return (
    <>
    <div className="row justify-content-center p-4 p-sm-4 ps-lg-8 mt-6 mt-lg-8">
      {/* <Head>
        <title>HIPAA Authorizations</title>
        <link rel="stylesheet" href="/web/css/datatables.min.css" />
      </Head> */}

      <div className="col-lg-3">
        <SettingsSideNav />
      </div>

        {/* HIPAA Authorizations Table */}
        <div className="col-12 col-lg-9 col-xl-8 col-md-6 mx-auto">
          <h2 className="mb-5 page-title mt-4">HIPAA Authorizations</h2>
          <table id="hipaaAuthorizationsTable" className="table table-striped w-100">
            <thead>
              <tr>
                <th>Agreed</th>
                <th>Expiration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/01/1980</td>
                <td>01/01/2000</td>
                <td>
                  <Link href="/account/hipaa/id" className="link-blue">View</Link>
                </td>
              </tr>
              <tr>
                <td>01/01/1980</td>
                <td>01/01/2000</td>
                <td>
                  <Link href="/account/hipaa/id" className="link-blue">View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      {/* Load external scripts for DataTables */}
      {/* <Script src="/web/js/datatables.min.js" strategy="lazyOnload" />
      <Script src="/web/js/hipaa.js" strategy="lazyOnload" /> */}
    </div>
    </>
  );
};

export default HipaaAuthorizations;
