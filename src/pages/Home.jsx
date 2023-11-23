import React from "react";
import home from "../assets/home.png";

export default function Home() {
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
        <p className='text-orange-400'>Hi. I am Nastya</p>
        <p className='text-6xl lg:text-8xl mb-16'>
          Tarot Card Reader
        </p>
        <p>
          Greetings, seeker of cosmic truths! I am Nastya, your
          mystical guide through the enchanted realm of Tarot. With
          over 5 years of devoted study, I've delved deep into the art
          of tarot reading, exploring the secrets hidden within the
          cards and unraveling the threads of destiny. <br />
          <br />
          At Mystic Nastya, I bring a whimsical touch to the ancient
          art of divination. My journey has led me to embrace a wide
          range of tarot decks, each holding its own unique energy and
          story. Whether you seek insights into love, career, or the
          ethereal mysteries of life, together, we'll embark on a
          journey to uncover the cosmic whispers and illuminate your
          path.
        </p>
        <div className='border-2 p-3 my-6 w-56'>
          MAKE AN APPOINTMENT
        </div>
      </div>
      <div className='md:my-20 flex justify-center'>
        <img className='lg:scale-125' src={home} alt='home' />
      </div>
    </section>
  );
}
