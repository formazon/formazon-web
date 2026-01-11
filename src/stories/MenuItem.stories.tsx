import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MenuItem } from '../components/ui/MenuItem';

const meta = {
  title: 'UI/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Link URL',
    },
    label: {
      control: 'text',
      description: 'Menu item label',
    },
    isActive: {
      control: 'boolean',
      description: 'Active state',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/work',
    label: 'Work',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    href: '/work',
    label: 'Work',
    isActive: true,
  },
};

export const MenuItems: Story = {
  args: {
    href: '/work',
    label: 'Work',
    isActive: false,
  },
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <MenuItem href="/" label="Home" isActive={false} />
      <MenuItem href="/work" label="Work" isActive={true} />
      <MenuItem href="/services" label="Services" isActive={false} />
      <MenuItem href="/about" label="About" isActive={false} />
      <MenuItem href="/contact" label="Contact" isActive={false} />
    </div>
  ),
};
