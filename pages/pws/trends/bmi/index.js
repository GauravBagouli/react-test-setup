import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const BmiComponent = dynamic(
    () => import('@/components/pws/trends/bmi'),
    { ssr: false },
);

export default function Login() {
    return <>
        <Navbar />
        <BmiComponent />
    </>
}
