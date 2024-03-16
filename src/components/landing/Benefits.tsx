import React from 'react';

interface feature {
  heading: string;
  description: string;
  thumbnail: string;
  gif: string;
}

interface benefitsProps {
  benefits: feature[];
}

const Benefits = () => {

  const ideaBenefits = [
    {
      heading: 'Super simple and user friendly editor.',
      description:
        'Learn the editor in 30 minutes without having to be blasted by technical jargon, roadblocks or having to leave the editor to spend days reading guides and watching tutorials so you can build your dream website.',
      thumbnail: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/ease.webp',
    },
    {
      heading: 'Pixel perfect customization.',
      description:
        'With lanndi, you are not limited to blocks and templates you can fully customize everything top to bottom just the way you like, and even achieve more functionality with the code editor.',
      thumbnail: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/properties.webp',
    },
    {
      heading: 'Convert more with fast and responsive websites.',
      description:
        'Reduce bounce rate and convert more by presenting a website that is beautiful and instantly loads on every device.',
      thumbnail: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/mobile.webp',
    },
    // {
    //   heading: 'Design without limit.',
    //   description:
    //     'Use the designer mode to freely place your block elements wherever you want without limits, rules and awkward constraints.',
    //   thumbnail: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/designermode.gif',
    // },
    {
      heading: 'Simple websites for less.',
      description:
        "lanndi is made specifically so you don't overpay for simple websites be it a landing page, a portfolios or a link in bio, each site has a maximum of 10 pages per domain allowing you to have more websites on single hosting plan.",
      thumbnail: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/sitesimage.jpg',
    },
  ];


  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <h2 className="mb-14 w-full text-center text-3xl">No more time wasted and headaches!</h2>
      <div className="flex flex-col items-start justify-center md:gap-8 py-4 ">
        {ideaBenefits.map((benefit, index) => (
          <div
            key={benefit.heading}
            className="flex flex-col items-center justify-center gap-4 py-4 text-center"
          >
            <h3 className="text-2xl">{benefit.heading}</h3>
            <p className=" h-20 max-w-3xl font-medium ">
              {benefit.description}
            </p>
            {benefit.thumbnail && (
              <img
                src={benefit.thumbnail}
                alt={benefit.heading}
                className="my-8 md:h-96 w-full rounded-lg object-contain bg-white "
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
