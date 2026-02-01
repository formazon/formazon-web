import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ContactCard } from '../components/contact/ContactCard';

const meta = {
  title: 'Cards/ContactCard',
  component: ContactCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title (e.g. email or channel name)',
    },
    href: {
      control: 'text',
      description: 'Link URL (mailto: or https:)',
    },
    external: {
      control: 'boolean',
      description: 'Open in new tab',
    },
  },
} satisfies Meta<typeof ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    title: 'mail@formazon.com',
    href: 'mailto:mail@formazon.com',
  },
};

export const Telegram: Story = {
  args: {
    title: 'Telegram',
    href: 'https://t.me/formazon',
    external: true,
  },
};

export const LinkedIn: Story = {
  args: {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/faridrafikov',
    external: true,
  },
};

export const AllContactCards: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-4">
      <ContactCard title="mail@formazon.com" href="mailto:mail@formazon.com" />
      <ContactCard title="Telegram" href="https://t.me/formazon" external />
      <ContactCard title="LinkedIn" href="https://linkedin.com/in/faridrafikov" external />
    </div>
  ),
};
