import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { H2Index } from '../components/ui/H2Index';

const meta = {
  title: 'UI/H2Index',
  component: H2Index,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Heading text',
    },
    index: {
      control: 'text',
      description: 'Index number or string',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof H2Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading Title',
    index: 1,
  },
};

export const WithStringIndex: Story = {
  args: {
    children: 'Another Heading',
    index: 'A',
  },
};

export const MultipleHeadings: Story = {
  args: {
    children: '',
    index: 1,
  },
  render: () => (
    <div className="space-y-4">
      <H2Index index={1}>First Heading</H2Index>
      <H2Index index={2}>Second Heading</H2Index>
      <H2Index index={3}>Third Heading</H2Index>
    </div>
  ),
};
