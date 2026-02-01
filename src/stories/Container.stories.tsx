import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Container } from '../components/layout/Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Content wrapped with gutter padding',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <p className="body">
        Container wraps content with <code className="caption">gutter</code> padding (responsive left/right).
      </p>
    ),
  },
};

export const WithHeading: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <h2 className="h2">Section title</h2>
        <p className="body">Content inside the container uses the same horizontal padding as the rest of the layout.</p>
      </div>
    ),
  },
};

export const WithCard: Story = {
  args: {
    children: (
      <div className="rounded-sm border border-border-subtle bg-surface p-6">
        <h3 className="subtitle-medium mb-2">Card inside container</h3>
        <p className="body-16 text-text-muted">The container adds consistent horizontal spacing.</p>
      </div>
    ),
  },
};
