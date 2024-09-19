import React from 'react';

interface InfoSectionProps {
  title: string;
  paragraphs: string[];
}

const Description: React.FC<InfoSectionProps> = ({ title, paragraphs }) => {
  return (
    <div className=" p-6  max-w-3xl">
      <h2 className="text-3xl font-bold mb-4 leading-tight">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Description;