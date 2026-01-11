import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Tag } from '../components/ui/Tag';

const meta = {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Tag content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag',
  },
};

export const WithText: Story = {
  args: {
    children: 'Design',
  },
};

export const MultipleTags: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag>Design</Tag>
      <Tag>Development</Tag>
      <Tag>Product</Tag>
    </div>
  ),
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom Tag',
    className: 'text-accent',
  },
};
