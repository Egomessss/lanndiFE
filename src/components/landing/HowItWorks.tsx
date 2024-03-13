import React from 'react';

interface HowItWork {
  heading: string;
  description: string;
}

interface HowItWorksProps {
  howItWorks: HowItWork[];
  postName: string;
}

const HowItWorks = () => {

  const howItWorks = [
    {
      heading: 'Create',
      description: 'Create your dream website in under 30 minutes.',
    },
    {
      heading: 'Publish',
      description: 'Collect data, feedback, leads, payments and much needed exposure.',
    },
    {
      heading: 'Share',
      description: 'Share your dream website with the world.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-20 py-20 ">
      <div className="flex  flex-col items-center justify-center  gap-4 py-4 text-center">
        <h2 className="text-3xl">
          1, 2, 3 it doesn&apos;t get any easier than this!
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full justify-between max-w-xl">
        {howItWorks.map((howItWork, index) => (
          <div
            key={index}
            className='flex flex-col  items-center justify-around gap-4 text-center'
          >
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 p-4 text-white font-bold">
                            {index + 1}.
                        </span>
            <h3>
              {howItWork.heading}
            </h3>
            {/*<p className=" font-medium text-gray-500 w-80 h-10">*/}
            {/*  {howItWork.description}*/}
            {/*</p>*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
