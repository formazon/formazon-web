import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { workItems } from '../lib/content/work';

import { WorkCard } from '../components/work/WorkCard';

const meta = {
  title: 'Cards/WorkCard',
  component: WorkCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    item: {
      control: 'object',
      description: 'Work item data',
    },
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppForType: Story = {
  args: {
    item: workItems.find((item) => item.slug === 'appfortype') || workItems[0],
  },
};

export const Explyt: Story = {
  args: {
    item: workItems.find((item) => item.slug === 'explyt') || workItems[0],
  },
};

export const Fuelet: Story = {
  args: {
    item: workItems.find((item) => item.slug === 'fuelet') || workItems[0],
  },
};

export const Jungle: Story = {
  args: {
    item: workItems.find((item) => item.slug === 'jungle') || workItems[0],
  },
};

export const Grid: Story = {
  args: {
    item: workItems[0],
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      {workItems.slice(0, 6).map((item) => (
        <WorkCard key={item.slug} item={item} />
      ))}
    </div>
  ),
};
