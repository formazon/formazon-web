import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WorkPreviewCard } from '../components/ui/WorkPreviewCard';

const meta = {
  title: 'Cards/WorkPreviewCard',
  component: WorkPreviewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    workSlug: {
      control: 'select',
      options: ['appfortype', 'explyt', 'fuelet', 'jungle', 'esprito', 'montessori'],
      description: 'Work case slug',
    },
  },
} satisfies Meta<typeof WorkPreviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppForType: Story = {
  args: {
    workSlug: 'appfortype',
  },
};

export const Explyt: Story = {
  args: {
    workSlug: 'explyt',
  },
};

export const Fuelet: Story = {
  args: {
    workSlug: 'fuelet',
  },
};

export const Jungle: Story = {
  args: {
    workSlug: 'jungle',
  },
};

export const MultipleCards: Story = {
  args: {
    workSlug: 'appfortype',
  },
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <WorkPreviewCard workSlug="appfortype" />
      <WorkPreviewCard workSlug="explyt" />
      <WorkPreviewCard workSlug="fuelet" />
    </div>
  ),
};
