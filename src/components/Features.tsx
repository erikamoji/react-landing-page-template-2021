import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-10 md:grid md:grid-cols-6 md:gap-x-5 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex center-xs items-center justify-center h-20 bg-background text-tertiary`}
                  >
                    <img
                      className={`inline-block h-20`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
