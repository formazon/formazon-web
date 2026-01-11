import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from '../components/layout/Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
  },
  render: () => (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="h1">Page Content</h1>
          <p className="body text-text-muted">
            This is example page content. The footer will be at the bottom.
          </p>
          <div className="h-96"></div>
        </div>
      </div>
      <Footer />
    </div>
  ),
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    layout: 'fullscreen',
  },
  render: () => (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="h1">Page Content</h1>
          <p className="body text-text-muted">
            Footer on tablet viewport. All elements should be visible and properly aligned.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    layout: 'fullscreen',
  },
  render: () => (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-background p-8">
        <div className="space-y-4">
          <h1 className="h1">Page Content</h1>
          <p className="body text-text-muted">
            Footer on mobile viewport. Check that all elements fit properly and are readable.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  ),
};

export const SmallMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
    layout: 'fullscreen',
  },
  render: () => (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-background p-8">
        <div className="space-y-4">
          <h1 className="h1">Page Content</h1>
          <p className="body text-text-muted">
            Footer on small mobile device (iPhone SE). Test that layout doesn&apos;t break on small screens.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  ),
};

export const Standalone: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
  },
  render: () => (
    <div>
      <Footer />
    </div>
  ),
};

export const WithContent: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
  },
  render: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="h1">Example Page</h1>
          <div className="space-y-4">
            <p className="body text-text-muted">
              This is an example page with content above the footer. 
              The footer should stick to the bottom of the viewport.
            </p>
            <div className="h-96 bg-surface rounded-sm p-6">
              <h2 className="h2 mb-4">Content Section</h2>
              <p className="body text-text-muted">
                Add more content here to see how the footer behaves with different amounts of content.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  ),
};

export const AllBreakpoints: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="h1">Footer at Different Breakpoints</h1>
          <p className="body text-text-muted">
            Use Storybook&apos;s viewport toolbar to switch between different screen sizes and test how the footer adapts:
          </p>
          <ul className="space-y-2 body text-text-muted list-disc list-inside">
            <li><strong>Desktop:</strong> Full width, all elements visible</li>
            <li><strong>Tablet:</strong> Responsive layout, elements may wrap</li>
            <li><strong>Mobile:</strong> Compact layout, text may wrap</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  ),
};
