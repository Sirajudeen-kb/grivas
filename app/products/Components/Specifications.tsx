import React from 'react';

interface Specification {
  label: string;
  value: string;
}

interface SpecificationsProps {
  title: string;
  specs: Specification[];
}

const Specifications: React.FC<SpecificationsProps> = ({ title, specs }) => {
  return (
    <div className=" p-6 ">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <ul className="space-y-3">
        {specs.map((spec, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 font-extrabold">•</span>
            <div>
              <span className={`font-semibold ${spec.label ? '' : 'hidden'}`}>{spec.label} : </span>
              <span className={`text-gray-700 `}>{spec.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specifications;