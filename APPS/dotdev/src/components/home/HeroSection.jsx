import React from 'react';
import { Link } from 'react-router-dom';
import { heroLinks } from '../../constants/data';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  const videos = [
    { src: video1, type: 'video/mp4' },
    { src: video2, type: 'video/mp4' },
  ];
  return (
    <div className="hero-wrapper flex flex-col items-center mt-6">
      <h1 className="slogan text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide text-neutral-700 dark:text-neutral-300">
        AceDot Build Tools
        <br />
        {/*  글씨 그라데이션 */}
        <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-600 dark:text-neutral-400 nax-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
        perspiciatis ipsa laudantium iure dolores, architecto sequi explicabo
        molestias enim quasi labore accusamus placeat impedit, saep deleniti
        modi.
      </p>
      <div className="sub-links mt-10 flex gap-3">
        {heroLinks.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className="py-[0.75rem] px-[1.5rem] border text-neutral-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className="video-wrapper flex flex-col md:flex-row gap-2 mt-10">
        {videos.map((video, idx) => (
          <video
            autoPlay
            loop
            muted
            key={idx}
            className="rounded-lg w-full md:w-[calc(50%-0.5rem)] border border-indigo-700 shadow-sm shoadow bg-indigo-400 my-auto mx-auto"
          >
            <source src={video.src} type={video.type} />
          </video>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
