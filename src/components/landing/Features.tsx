import React from 'react';
import { CheckIcon, ThemeIcon } from '@mantine/core';

interface feature {
  heading: string;
  description: string;
  icon: string;
  gif: string;
}

interface featuresProps {
  features: feature[];
}

const Features = () => {
  const features = [
    {
      heading: 'Free SSL',
      description:
        'Every page is published and secured with a free SSL certificate.',
    },
    {
      heading: 'Custom domains',
      description:
        'Publish your site with any custom domain you own.',
    },
    {
      heading: 'Custom code',
      description:
        'Add custom HTML, CSS and JavaScript code to your pages. Embed your own custom code and widgets from third-party services.',
    },
    {
      heading: 'Blocks gallery',
      description:
        'Use our ready to go blocks to create your dream website faster.',
    },

  ];

  return (
    <div className="my-20">
      <h2 className="w-full text-center text-3xl">Features</h2>
      <div className="grid grid-cols-1  items-center justify-center  gap-8 py-4 md:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={feature.heading}
            className="col-span-1 flex flex-col items-center justify-center gap-4 py-4 text-center"
          >
            <ThemeIcon
              size="xl"
              radius="xl"
            >
              <CheckIcon size="1rem" />
            </ThemeIcon>
            <span className="text-xl font-bold">
                            {feature.heading}
                        </span>
            <p className=" max-w-3xl h-20">{feature.description}</p>
          </div>
        ))}

      </div>
      <div className="flex items-center justify-center w-full">  <span className="text-center text-xl font-bold w-full">
                    and so much more!
                </span></div>

    </div>
  );
};

export default Features;
