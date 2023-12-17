import React, { Suspense } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from './providers';
import './globals.css';
// import { Provider } from 'react-redux';
// import App from '../App';
// import store from '../store/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <App /> */}
//       <h1>Hello World!</h1>
//     </Provider>
//   </React.StrictMode>
// );

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Askme | IT forum",
  description: "A simple todo list application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <QueryProvider>
          <Suspense fallback={<p>Loading...</p>}>
            {children} 
          </Suspense>
        </QueryProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}