import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className='mx-16 sm:mx-28 text-slate-200 mt-20'>
        {children}
      </div>
      <Footer />
    </>
  );
}
