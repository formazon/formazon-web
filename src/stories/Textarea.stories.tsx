import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Textarea } from '../components/ui/Input';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Textarea label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    rows: {
      control: 'number',
      description: 'Number of rows',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Message',
    defaultValue: 'This is a pre-filled message...',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    rows: 4,
    error: 'Message is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Message',
    placeholder: 'Cannot edit',
    rows: 4,
    disabled: true,
  },
};
