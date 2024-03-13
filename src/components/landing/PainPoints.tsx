import { Blockquote } from '@mantine/core';
import { IconArrowNarrowDown, IconBulb, IconFaceIdError } from '@tabler/icons-react';
import React from 'react';

interface painPoint {
  heading: string;
  description: string;
}

interface painPointsProps {
  painPoints: painPoint[];
}

const PainPoints = () => {
  const painPoints = [
    'Needing a developer or designer to create your dream website...',
    'Needing to watch hours of tutorials and weeks creating a simple website in a non user-friendly website editor with tons of unnecessary options and technical jargon …',
    'Expensive hosting for just simple websites, that don\'t even have everything you need for them to work out of the box…',
  ];

  return (
    <div className="flex flex-col  items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h2 className="w-full py-4 text-center text-3xl">
          Aren&apos;t you
          <span className="text-red-500 underline ml-2">
                         tired
                    </span>{' '}of...
        </h2>
        <IconArrowNarrowDown className="mb-2 animate-bounce text-3xl text-red-500" />
      </div>

      <ul className=" flex w-full flex-col   items-center justify-start  gap-4 font-semibold md:max-w-2xl mb-8">
        {painPoints.map((painPoint) => {
          return (
            <li
              key={painPoint}
              className="flex w-full items-center  gap-4 text-start"
            >
              <IconFaceIdError
                size="2rem"
                className="text-red-500"
              />
              <p className='w-full'>{painPoint}</p>
            </li>
          );
        })}
      </ul>
      {/*<Blockquote color="blue" cite="– Edmilson Gomes, 2023" icon={<IconBulb/>} mt="xl">*/}
      {/*    Stop thinking people will steal your million-dollar idea and start executing your million-dollar idea.*/}
      {/*</Blockquote>*/}
    </div>
  );
};

export default PainPoints;
