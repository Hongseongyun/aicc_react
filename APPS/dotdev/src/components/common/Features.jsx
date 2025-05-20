import React from 'react';
import { features } from '../../constants/data';

const Features = () => {
  return (
    <div className="features-wrapper mt-20 border-b border-neutral-800">
      <div className="features-title text-center">
        <span className="text-indigo-500 py-1 px-2 text-sm font-medium uppercase rounded-full border border-neutral-500 bg-white dark:bg-neutral-800 dark:border-0">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily Build{' '}
          <span className=" bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
            Your Codes
          </span>
        </h2>
      </div>
      <div className="features-cards flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, idx) => (
          <div key={idx} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex mt-10">
              <div>
                <div className="mr-2">{feature.icon}</div>
              </div>
              <div>
                <h5>{feature.text}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
