import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MenuToggle } from "@/components/ui/MenuToggle";
import { ThemeProvider } from '../components/providers/ThemeProvider';
import { useState } from "react";

const meta = {
    title: "UI/MenuToggle",
    component: MenuToggle,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
    argTypes: {
        isOpen: {
            control: "boolean",
            description: "Whether the menu is open",
        },
        onClick: {
            action: "clicked",
            description: "Callback when the button is clicked",
        },
    },
} satisfies Meta<typeof MenuToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive story with state management
function InteractiveMenuToggle() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MenuToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
        />
    );
}

export const Default: Story = {
    render: () => <InteractiveMenuToggle />,
};

export const Closed: Story = {
    args: {
        isOpen: false,
        onClick: () => {},
    },
};

export const Open: Story = {
    args: {
        isOpen: true,
        onClick: () => {},
    },
};

export const InContext: Story = {
    render: () => (
        <div className="flex items-center gap-4 p-4 bg-surface rounded-sm">
            <span className="label-medium">Navigation</span>
            <MenuToggle isOpen={false} onClick={() => {}} />
        </div>
    ),
};

export const DarkMode: Story = {
    render: () => (
        <div className="dark p-4 bg-background rounded-sm">
            <div className="flex items-center gap-4">
                <span className="label-medium text-foreground">Navigation</span>
                <MenuToggle isOpen={false} onClick={() => {}} />
            </div>
        </div>
    ),
};
