import React, { Suspense } from 'react';
import type { Metadata } from "next";
// import { auth } from "auth";
import { Inter } from "next/font/google";
import './globals.css';
import { AuthProvider } from './session.provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Askme | Discussion forum",
  description: "Here you can find information about technology, science, design and art",
};

export default async function RootLayout({ 
  auth, 
  children 
}: { 
  auth: React.ReactNode, 
  children: React.ReactNode 
}) {  
  return (
    <html lang="en">
      <body className={inter.className}>
          <Suspense fallback={<p className='animate-spin'>Loading...</p>}>
            <AuthProvider>
              {auth}
              {children}
            </AuthProvider> 
          </Suspense>
      </body>
    </html>
  );
}