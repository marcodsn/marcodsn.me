import React from 'react';
import { Inter as FontSans } from 'next/font/google';
import '@/app/globals.css';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Define children
interface LayoutProps {
  children: React.ReactNode;
}

// const DefaultLayout = ({ children }: LayoutProps) => {
export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <div className="container flex min-h-screen flex-col md:w-[45rem] p-4 md:p-8">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

// export default DefaultLayout;
