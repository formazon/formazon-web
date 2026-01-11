import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WorkDropdownMenu } from '../components/ui/WorkDropdownMenu';
import { workItems } from '../lib/content/work';

const meta = {
  title: 'UI/WorkDropdownMenu',
  component: WorkDropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    workItems: {
      control: 'object',
      description: 'Array of work items to display',
    },
    onItemHover: {
      action: 'item hovered',
      description: 'Callback when hovering over an item',
    },
    onItemLeave: {
      action: 'item left',
      description: 'Callback when leaving an item',
    },
    onMouseEnter: {
      action: 'mouse entered',
      description: 'Callback when mouse enters the menu',
    },
    onMouseLeave: {
      action: 'mouse left',
      description: 'Callback when mouse leaves the menu',
    },
  },
} satisfies Meta<typeof WorkDropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    workItems: workItems,
  },
  render: (args) => (
    <div className="relative">
      <WorkDropdownMenu {...args} />
    </div>
  ),
};

export const FewItems: Story = {
  args: {
    workItems: workItems.slice(0, 3),
  },
  render: (args) => (
    <div className="relative">
      <WorkDropdownMenu {...args} />
    </div>
  ),
};

export const SingleItem: Story = {
  args: {
    workItems: workItems.slice(0, 1),
  },
  render: (args) => (
    <div className="relative">
      <WorkDropdownMenu {...args} />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    workItems: workItems,
    onItemHover: (slug) => console.log('Hovered:', slug),
    onItemLeave: () => console.log('Left item'),
    onMouseEnter: () => console.log('Menu entered'),
    onMouseLeave: () => console.log('Menu left'),
  },
  render: (args) => (
    <div className="relative">
      <WorkDropdownMenu {...args} />
    </div>
  ),
};
