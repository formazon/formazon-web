import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { workItems } from '../lib/content/work';
import { WorkCard } from '../components/work/WorkCard';
import { WorkGrid } from '../components/work/WorkGrid';

const meta = {
  title: 'Layout/WorkGrid',
  component: WorkGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      description: 'Array of work items',
    },
    columns: {
      control: 'select',
      options: [1, 2, 3],
      description: 'Number of columns (1, 2, or 3)',
    },
  },
} satisfies Meta<typeof WorkGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumns: Story = {
  args: {
    items: workItems,
    columns: 2,
    renderItem: (item) => <WorkCard item={item} />,
  },
};

export const OneColumn: Story = {
  args: {
    items: workItems.slice(0, 3),
    columns: 1,
    renderItem: (item) => <WorkCard item={item} />,
  },
};

export const ThreeColumns: Story = {
  args: {
    items: workItems.slice(0, 3),
    columns: 3,
    renderItem: (item) => <WorkCard item={item} />,
  },
};

export const WithWorkCards: Story = {
  args: {
    items: workItems,
    columns: 2,
    renderItem: (item) => <WorkCard item={item} />,
  },
  parameters: {
    layout: 'padded',
  },
  render: (args) => (
    <div className="w-full max-w-5xl">
      <WorkGrid {...args} />
    </div>
  ),
};
