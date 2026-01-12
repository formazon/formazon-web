import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { QuadroDot } from '../components/ui/QuadroDot';

const meta = {
  title: 'Dividers/QuadroDot',
  component: QuadroDot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuadroDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <QuadroDot />
      <QuadroDot />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="p-4 bg-surface rounded-sm">
        <p className="caption-medium mb-4">Section 1</p>
        <QuadroDot />
      </div>
      <div className="p-4 bg-surface rounded-sm">
        <p className="caption-medium mb-4">Section 2</p>
        <QuadroDot />
      </div>
    </div>
  ),
};
