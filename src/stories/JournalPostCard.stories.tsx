import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { JournalPostCard } from '../components/journal/JournalPostCard';
import { journalPosts } from '../lib/content/journal';

const meta = {
  title: 'Cards/JournalPostCard',
  component: JournalPostCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    post: {
      control: 'object',
      description: 'Journal post object with title, slug, excerpt, date, and optional tag',
    },
  },
} satisfies Meta<typeof JournalPostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HowToShape: Story = {
  args: {
    post: journalPosts[0],
  },
};

export const DesigningForClarity: Story = {
  args: {
    post: journalPosts[1],
  },
};

export const WhyAIShouldFeelPredictable: Story = {
  args: {
    post: journalPosts[2],
  },
};

export const AllPosts: Story = {
  args: {
    post: journalPosts[0],
  },
  render: () => (
    <div className="grid gap-6 md:grid-cols-3 max-w-6xl">
      {journalPosts.map((post) => (
        <JournalPostCard key={post.slug} post={post} />
      ))}
    </div>
  ),
};

export const WithCoverImage: Story = {
  args: {
    post: {
      title: "Example Post with Cover",
      slug: "example-with-cover",
      excerpt: "This is an example journal post that has a cover image to demonstrate how it looks.",
      date: "2025-01-15",
      tag: "Design",
    },
  },
  render: (args) => (
    <div className="max-w-md">
      <JournalPostCard {...args} />
    </div>
  ),
};

export const WithoutTag: Story = {
  args: {
    post: {
      title: "Example Post without Tag",
      slug: "example-without-tag",
      excerpt: "This is an example journal post without a tag to show the alternative layout.",
      date: "2025-01-10",
    },
  },
  render: (args) => (
    <div className="max-w-md">
      <JournalPostCard {...args} />
    </div>
  ),
};
