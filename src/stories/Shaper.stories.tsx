import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Shaper } from '../components/ui/Shaper';

const meta = {
  title: 'Dividers/Shaper',
  component: Shaper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Shaper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Multiple: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Shaper />
      <Shaper />
      <Shaper />
    </div>
  ),
};
