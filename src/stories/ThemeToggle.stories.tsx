import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ThemeProvider } from '../components/providers/ThemeProvider';

import { ThemeToggle } from '../components/layout/ThemeToggle';

const meta = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InHeader: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 bg-surface rounded-sm">
      <span className="label-medium">Navigation</span>
      <ThemeToggle />
    </div>
  ),
};
