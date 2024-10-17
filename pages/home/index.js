import React from 'react';
import dynamic from 'next/dynamic';
const HomeComponent = dynamic(() => import('@/components/home/index'), {
  ssr: false,
});

export default function Home() {
  return <HomeComponent />;
}
