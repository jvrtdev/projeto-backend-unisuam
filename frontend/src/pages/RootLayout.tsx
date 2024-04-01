import React from 'react';
import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";
import ScrollTop from '@/components/ScrollTop/ScrollTop';

const RootLayout = React.memo(() => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <ScrollTop/>
    </>
  );
});

export default RootLayout;
