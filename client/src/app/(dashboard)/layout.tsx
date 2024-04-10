import React from 'react'
import MainLayout from '../../components/MainLayout';

function Dashboard({ children }: { children: React.ReactNode } ) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}

export default Dashboard;