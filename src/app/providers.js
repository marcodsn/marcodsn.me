'use client';

import dynamic from 'next/dynamic';
import MainHeader from '@/components/Header/MainHeader';
// const MainHeader = dynamic(() => import('@/components/Header/MainHeader'), { ssr: false });  // client-side only
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
    return (
        <div>
            <Theme theme="g100">
                <MainHeader />
            </Theme>
            <Content>{children}</Content>
        </div>
    );
}