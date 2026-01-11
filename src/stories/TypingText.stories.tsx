import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TypingText } from '../components/ui/TypingText';

const meta = {
  title: 'UI/TypingText',
  component: TypingText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to type out',
    },
    typingSpeed: {
      control: { type: 'number', min: 10, max: 500, step: 10 },
      description: 'Speed of typing in milliseconds',
    },
    showCursor: {
      control: 'boolean',
      description: 'Whether to show the cursor',
    },
    cursorCharacter: {
      control: 'text',
      description: 'Character to use as cursor',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    blinkCount: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      description: 'Number of cursor blinks before disappearing',
    },
    blinkSpeed: {
      control: { type: 'number', min: 100, max: 1000, step: 50 },
      description: 'Speed of cursor blinking in milliseconds',
    },
  },
} satisfies Meta<typeof TypingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello, this is a typing animation!',
    typingSpeed: 75,
    showCursor: true,
    cursorCharacter: '|',
  },
};

export const Fast: Story = {
  args: {
    text: 'This text types very quickly!',
    typingSpeed: 30,
    showCursor: true,
  },
};

export const Slow: Story = {
  args: {
    text: 'This text types very slowly...',
    typingSpeed: 150,
    showCursor: true,
  },
};

export const WithoutCursor: Story = {
  args: {
    text: 'No cursor shown here',
    typingSpeed: 75,
    showCursor: false,
  },
};

export const CustomCursor: Story = {
  args: {
    text: 'Using a custom cursor character',
    typingSpeed: 75,
    showCursor: true,
    cursorCharacter: '_',
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a much longer text that demonstrates how the typing animation works with multiple sentences and paragraphs. It shows the smooth typing effect and cursor blinking behavior.',
    typingSpeed: 50,
    showCursor: true,
  },
};

export const NoBlink: Story = {
  args: {
    text: 'Cursor disappears immediately after typing',
    typingSpeed: 75,
    showCursor: true,
    blinkCount: 0,
  },
};

export const ManyBlinks: Story = {
  args: {
    text: 'Cursor blinks many times before disappearing',
    typingSpeed: 75,
    showCursor: true,
    blinkCount: 5,
    blinkSpeed: 300,
  },
};

export const WithClassName: Story = {
  args: {
    text: 'Styled typing text',
    typingSpeed: 75,
    showCursor: true,
    className: 'text-2xl font-bold text-accent',
  },
};

export const AllVariations: Story = {
  args: {
    text: '',
  },
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <p className="label text-text-muted mb-2">Default</p>
        <TypingText text="Default typing animation" typingSpeed={75} />
      </div>
      <div>
        <p className="label text-text-muted mb-2">Fast</p>
        <TypingText text="Fast typing animation" typingSpeed={30} />
      </div>
      <div>
        <p className="label text-text-muted mb-2">Slow</p>
        <TypingText text="Slow typing animation" typingSpeed={150} />
      </div>
      <div>
        <p className="label text-text-muted mb-2">Without Cursor</p>
        <TypingText text="No cursor here" showCursor={false} />
      </div>
      <div>
        <p className="label text-text-muted mb-2">Custom Cursor</p>
        <TypingText text="Custom cursor _" cursorCharacter="_" />
      </div>
    </div>
  ),
};
