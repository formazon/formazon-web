import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TextLink } from '../components/ui/TextLink';

const meta = {
  title: 'UI/TextLink',
  component: TextLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Link URL',
    },
    children: {
      control: 'text',
      description: 'Link content',
    },
    external: {
      control: 'boolean',
      description: 'Open in new tab',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/work',
    children: 'View Work',
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
    external: true,
  },
};

export const InParagraph: Story = {
  args: {
    href: '/work',
    children: '',
  },
  render: () => (
    <p className="body max-w-md">
      This is a paragraph with a{' '}
      <TextLink href="/work">link to work</TextLink> inside it. You can also
      have an{' '}
      <TextLink href="https://example.com" external>
        external link
      </TextLink>{' '}
      that opens in a new tab.
    </p>
  ),
};

export const MultipleLinks: Story = {
  args: {
    href: '/work',
    children: 'Link',
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <TextLink href="/work">Internal Link</TextLink>
      <TextLink href="https://example.com" external>
        External Link
      </TextLink>
      <TextLink href="/services">Services</TextLink>
    </div>
  ),
};
