import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from '../components/ui/Input';

const inputMeta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Input>;

export default inputMeta;
type InputStory = StoryObj<typeof inputMeta>;

export const Default: InputStory = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    type: 'text',
  },
};

export const WithValue: InputStory = {
  args: {
    label: 'Email',
    type: 'email',
    defaultValue: 'example@email.com',
  },
};

export const WithError: InputStory = {
  args: {
    label: 'Email',
    type: 'email',
    error: 'Please enter a valid email address',
  },
};

export const Disabled: InputStory = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};

export const AllTypes: InputStory = {
  args: {
    label: '',
  },
  render: () => (
    <div className="space-y-4 w-80">
      <Input label="Text" type="text" placeholder="Text input" />
      <Input label="Email" type="email" placeholder="email@example.com" />
      <Input label="Password" type="password" placeholder="Password" />
      <Input label="Number" type="number" placeholder="123" />
      <Input label="Tel" type="tel" placeholder="+1 234 567 8900" />
    </div>
  ),
};
