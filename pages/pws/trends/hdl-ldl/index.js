import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const HdlAndLdlComponent = dynamic(
    () => import('@/components/pws/trends/hdlAndLdl'),
    { ssr: false },
);

export default function Login() {
    return <>
        <Navbar />
        <HdlAndLdlComponent />
    </>
}
