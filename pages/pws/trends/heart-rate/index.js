import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const HeartRateComponent = dynamic(
    () => import('@/components/pws/trends/heart-rate'),
    { ssr: false },
);

export default function Login() {
    return <>
        <Navbar />
        <HeartRateComponent />
    </>
}
