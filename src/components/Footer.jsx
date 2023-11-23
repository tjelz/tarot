import React from "react";

export default function Footer() {
  return (
    <footer>
      <div></div>
      <div className='text-stone-200 flex flex-col md:flex-row items-center justify-around w-full bg-stone-900'>
        <div className='p-4'>
          Copyright © {new Date().getFullYear()} Tarot Card Reader
        </div>
        <div className='p-4'>Powered by Tarot Card Reader</div>
      </div>
    </footer>
  );
}
