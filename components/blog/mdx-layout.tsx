import React from 'react';
import { Inter as FontSans } from 'next/font/google';
import '@/app/globals.css';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Define children
interface MdxLayoutProps {
  children: React.ReactNode;
}

const MdxLayout = ({ children }: MdxLayoutProps) => {
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
        <div className="container flex min-h-screen flex-col py-4 md:w-[45rem] md:py-8">
          <Header />
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MdxLayout;
