import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Dot } from '../components/ui/Dot';

const meta = {
  title: 'UI/Dot',
  component: Dot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Multiple: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Dot />
      <Dot />
      <Dot />
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span>Item 1</span>
      <Dot />
      <span>Item 2</span>
      <Dot />
      <span>Item 3</span>
    </div>
  ),
};
