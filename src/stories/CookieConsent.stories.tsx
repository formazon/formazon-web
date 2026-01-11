import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CookieConsentProvider } from '../components/providers/CookieConsentProvider';

import { CookieConsent } from '../components/analytics/CookieConsent';

const meta = {
  title: 'Cards/CookieConsent',
  component: CookieConsent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <CookieConsentProvider>
        <Story />
      </CookieConsentProvider>
    ),
  ],
} satisfies Meta<typeof CookieConsent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Cookie consent banner appears when consent status is "pending". Make sure to set localStorage to see it.',
      },
    },
  },
};

export const WithContent: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-8">
      <h1 className="h1 mb-4">Page Content</h1>
      <p className="body mb-4">
        This is a page with cookie consent banner. The banner appears at the
        bottom right corner when consent status is pending.
      </p>
      <CookieConsent />
    </div>
  ),
};
