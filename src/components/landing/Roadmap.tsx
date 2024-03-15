import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconCheck, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

export const Roadmap = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <h2 className="text-4xl">Roadmap</h2>
      <ul className="flex flex-col gap-4 max-w-xl ">
        <li className="flex gap-4 items-center">
          <IconCheck size="2rem" />
          <Text size="xl">Pages Expansion</Text>
        </li>
        <li className="flex gap-4 items-center">
          <IconCheck size="2rem" />
          <Text size="xl">SEO Optimization </Text>
        </li>
        <li className="flex gap-4 items-center">
          <IconCheck size="2rem" />
          <Text size="xl">Native integrations</Text>
        </li>
        <li className="flex gap-4 items-center">
          <IconCheck size="2rem" />
          <Text size="xl">Forms</Text>
        </li>
        <li className="flex gap-4 items-center">
          <IconCheck size="2rem" />
          <Text size="xl">Templates and blocks marketplace</Text>
        </li>
        <li className="flex gap-4 items-center">
          <IconCheck size="2rem" />
          <Text size="xl">Save custom blocks and templates</Text>
        </li>
        <li className="flex gap-4 items-center">
          <IconCheck size="2rem" />
          <Text size="xl">CMS</Text>
        </li>
      </ul>
    </div>

  );
};