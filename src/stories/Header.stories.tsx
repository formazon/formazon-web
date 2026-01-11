import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from '../components/layout/Header';

const meta = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

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
    <div>
      <Header />
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="h1">Page Content</h1>
          <p className="body text-text-muted">
            This is example page content to demonstrate how the header looks on desktop.
            Scroll down to see how the header behaves when scrolled.
          </p>
          <div className="h-screen"></div>
          <p className="body text-text-muted">
            Scroll to see the header background change.
          </p>
        </div>
      </div>
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
    <div>
      <Header />
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="h1">Page Content</h1>
          <p className="body text-text-muted">
            This is example page content to demonstrate how the header looks on tablet.
          </p>
        </div>
      </div>
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
    <div>
      <Header />
      <div className="min-h-screen bg-background p-8">
        <div className="space-y-4">
          <h1 className="h1">Page Content</h1>
          <p className="body text-text-muted">
            This is example page content to demonstrate how the header looks on mobile.
            Tap the menu button to see the mobile navigation menu.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const MobileWithOpenMenu: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    layout: 'fullscreen',
  },
  render: () => (
    <div>
      <Header />
      <div className="min-h-screen bg-background p-8">
        <div className="space-y-4">
          <h1 className="h1">Page Content</h1>
          <p className="body text-text-muted">
            This view demonstrates the header with mobile menu open. 
            Click the menu button to toggle the navigation.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const OnWorkPage: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/work',
      },
    },
  },
  render: () => (
    <div>
      <Header />
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="h1">Work Page</h1>
          <p className="body text-text-muted">
            Header on the Work page. Hover over "Work" in the navigation to see the dropdown menu.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const OnAboutPage: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/about',
      },
    },
  },
  render: () => (
    <div>
      <Header />
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="h1">About Page</h1>
          <p className="body text-text-muted">
            Header on the About page showing active navigation state.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const ScrolledState: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
  },
  render: () => (
    <div>
      <Header />
      <div className="min-h-[200vh] bg-background">
        <div className="max-w-4xl mx-auto p-8 space-y-8">
          <div className="pt-32">
            <h1 className="h1">Scroll Down</h1>
            <p className="body text-text-muted mt-4">
              Scroll down to see how the header background appears when scrolled.
              The header should get a semi-transparent background with backdrop blur.
            </p>
          </div>
          <div className="h-screen"></div>
          <div>
            <h2 className="h2">Scrolled Position</h2>
            <p className="body text-text-muted mt-4">
              The header should now have a background applied. Scroll back up to see it disappear.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllBreakpoints: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div>
      <Header />
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="h1">Header at Different Breakpoints</h1>
          <p className="body text-text-muted">
            Use Storybook&apos;s viewport toolbar to switch between different screen sizes:
          </p>
          <ul className="space-y-2 body text-text-muted list-disc list-inside">
            <li><strong>Desktop:</strong> Full navigation menu with social links</li>
            <li><strong>Tablet:</strong> Hidden navigation, hamburger menu appears</li>
            <li><strong>Mobile:</strong> Compact header with mobile menu button</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};
