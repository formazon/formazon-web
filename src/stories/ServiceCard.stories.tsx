import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ServiceCard } from '../components/services/ServiceCard';
import { services } from '../lib/content/services';

const meta = {
  title: 'Cards/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    service: {
      control: 'object',
      description: 'Service object with title, subtitle, description, and bullets',
    },
  },
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductAndUX: Story = {
  args: {
    service: services[0],
  },
};

export const InterfaceAndVisual: Story = {
  args: {
    service: services[1],
  },
};

export const AIAndDeveloperTools: Story = {
  args: {
    service: services[2],
  },
};

export const BrandAndProductStory: Story = {
  args: {
    service: services[3],
  },
};

export const AllServices: Story = {
  args: {
    service: services[0],
  },
  render: () => (
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  ),
};

export const WithSubtitle: Story = {
  args: {
    service: {
      title: "Custom Service",
      subtitle: "A service with subtitle",
      description: "This is an example service card with a subtitle to demonstrate how it looks.",
      bullets: [
        "First feature or benefit",
        "Second feature or benefit",
        "Third feature or benefit",
      ],
    },
  },
};

export const WithoutSubtitle: Story = {
  args: {
    service: {
      title: "Simple Service",
      description: "This is an example service card without a subtitle to show the alternative layout.",
      bullets: [
        "Feature one",
        "Feature two",
        "Feature three",
        "Feature four",
      ],
    },
  },
};
