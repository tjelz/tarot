import React from "react";
import about from "../assets/about.png";

export default function AboutMe() {
  return (
    <section className='flex flex-col lg:flex-row items-top justify-center'>
      <div className='absolute -z-10 opacity-10 inset-0 bg-cover bg-center bg-[url("./assets/back.jpg")]'></div>
      <div
        className='absolute inset-0 bg-cover bg-center -z-10'
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.1))"
        }}
      ></div>
      <div className='lg:w-1/2'>
        <p className='text-orange-400'>About me</p>
        <p className='text-6xl lg:text-8xl mb-12'>Nastya Orange</p>
        <p>
          Active Tarot practitioner with more than 4 years of
          experience <br />
          <br />
          Creator and author of the courses "Tarot for Beginners" and
          "Tarot as a Psychological Tool".
          <br />
          <br />
          Multiple winner of "Tarot What? Where? When?" and Finalist
          of "Anti-Battle Magic"
          <br />
          <br />
          I work in co-authorship with other professional tarot
          'experts'.
          <br />
          <br />
          At the consultation Anastasia will answer any of your
          questions in all spheres of life: finances, work, personal
          relationships, health state. In addition, you will have the
          opportunity to see the problems of another person without
          photos, personal belongings and his presence.
        </p>
      </div>
      <div className='md:my-20 flex justify-center'>
        <img className='lg:scale-125' src={about} alt='home' />
      </div>
    </section>
  );
}
