import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const BpComponent = dynamic(
    () => import('@/components/pws/trends/blood-pressure'),
    { ssr: false },
);

export default function Login() {
    return <>
        <Navbar />
        <BpComponent />
    </>
}
