import React from 'react';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ title, features }) => {
  return (
    <div className=" p-6 ">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 whitespace-pre-wrap">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;