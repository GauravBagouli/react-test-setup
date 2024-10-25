import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const BOXComponent = dynamic(
    () => import('@/components/pws/trends/blood-oxygen'),
    { ssr: false },
);

export default function Login() {
    return <>
        <Navbar />
        <BOXComponent />
    </>
}
