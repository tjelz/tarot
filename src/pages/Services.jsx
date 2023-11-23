import React from "react";
import price from "../assets/price.png";

export default function Services() {
  return (
    <section className='flex flex-col lg:flex-row items-top lg:justify-center min-h-screen'>
      <div className='absolute -z-10 opacity-10 inset-0 bg-cover bg-center bg-[url("./assets/back.jpg")]'></div>
      <div
        className='absolute inset-0 bg-cover bg-center -z-10'
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.1))"
        }}
      ></div>
      <div className='absolute lg:relative'>
        <img className='lg:scale-125' src={price} alt='home' />
      </div>
      <div className='lg:w-1/2 z-10 text-lg'>
        <p className='text-orange-400'>Advice & Meanings</p>
        <p className='text-6xl lg:text-8xl mb-16'>Services</p>
        <div>
          <p className='py-8 hover:text-orange-300 cursor-pointer border-b-2 hover:border-b-orange-300'>
            Layout for any question (from 3 cards) 1000 euros
          </p>
          <p className='py-8 hover:text-orange-300 cursor-pointer border-b-2 hover:border-b-orange-300'>
            Arrangement for two or more questions (from 3 cards) 2000
            euros
          </p>
          <p className='py-8 hover:text-orange-300 cursor-pointer border-b-2 hover:border-b-orange-300'>
            Layout by topic (at choice) Small layout (3-6 cards): 800
            euros
          </p>
          <p className='py-8 hover:text-orange-300 cursor-pointer border-b-2 hover:border-b-orange-300'>
            Detailed layout (15+ cards) 2500 euros
          </p>
        </div>
      </div>
    </section>
  );
}
