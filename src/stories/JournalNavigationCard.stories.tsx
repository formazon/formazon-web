import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { journalPosts } from '../lib/content/journal';

import { JournalNavigationCard } from '../components/journal/JournalNavigationCard';

const meta = {
  title: 'Cards/JournalNavigationCard',
  component: JournalNavigationCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    post: {
      control: 'object',
      description: 'Journal post data',
    },
    direction: {
      control: 'select',
      options: ['next', 'previous'],
      description: 'Navigation direction',
    },
    href: {
      control: 'text',
      description: 'Link URL',
    },
  },
} satisfies Meta<typeof JournalNavigationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Previous: Story = {
  args: {
    post: journalPosts[1] || journalPosts[0],
    direction: 'previous',
    href: `/journal/${journalPosts[1]?.slug || journalPosts[0]?.slug}`,
  },
};

export const Next: Story = {
  args: {
    post: journalPosts[0] || journalPosts[1],
    direction: 'next',
    href: `/journal/${journalPosts[0]?.slug || journalPosts[1]?.slug}`,
  },
};

export const BothDirections: Story = {
  args: {
    post: journalPosts[0],
    direction: 'previous',
    href: `/journal/${journalPosts[0]?.slug}`,
  },
  render: () => (
    <div className="flex gap-4 max-w-4xl">
      <div className="flex-1">
        <JournalNavigationCard
          post={journalPosts[1] || journalPosts[0]}
          direction="previous"
          href={`/journal/${journalPosts[1]?.slug || journalPosts[0]?.slug}`}
        />
      </div>
      <div className="flex-1">
        <JournalNavigationCard
          post={journalPosts[0] || journalPosts[1]}
          direction="next"
          href={`/journal/${journalPosts[0]?.slug || journalPosts[1]?.slug}`}
        />
      </div>
    </div>
  ),
};

export const AllPosts: Story = {
  args: {
    post: journalPosts[0],
    direction: 'previous',
    href: `/journal/${journalPosts[0]?.slug}`,
  },
  render: () => (
    <div className="space-y-4 max-w-2xl">
      {journalPosts.map((post, index) => {
        const isLast = index === journalPosts.length - 1;
        const nextPost = !isLast ? journalPosts[index + 1] : undefined;
        const prevPost = index > 0 ? journalPosts[index - 1] : undefined;

        return (
          <div key={post.slug} className="space-y-4">
            <div className="p-4 border border-border-subtle rounded-sm">
              <h3 className="h3 mb-2">{post.title}</h3>
              <p className="label text-text-muted">{post.date}</p>
            </div>
            <div className="flex gap-4">
              {prevPost && (
                <div className="flex-1">
                  <JournalNavigationCard
                    post={prevPost}
                    direction="previous"
                    href={`/journal/${prevPost.slug}`}
                  />
                </div>
              )}
              {nextPost && (
                <div className="flex-1">
                  <JournalNavigationCard
                    post={nextPost}
                    direction="next"
                    href={`/journal/${nextPost.slug}`}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  ),
};
