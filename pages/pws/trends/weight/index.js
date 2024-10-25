import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const WeightComponent = dynamic(
    () => import('@/components/pws/trends/weight'),
    { ssr: false },
);

export default function Login() {
    return <>
        <Navbar />
        <WeightComponent />
    </>
}
