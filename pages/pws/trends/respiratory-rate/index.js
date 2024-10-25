import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const RespRateComponent = dynamic(
    () => import('@/components/pws/trends/respiratory-rate'),
    { ssr: false },
);

export default function Login() {
    return <>
        <Navbar />
        <RespRateComponent />
    </>
}
