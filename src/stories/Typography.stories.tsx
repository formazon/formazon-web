import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h1 className="h1">Heading 1 (H1)</h1>
        <p className="label text-text-muted mt-2">IBM Plex Sans • 40px/64px • 500 • 1.2</p>
      </div>
      <div>
        <h2 className="h2">Heading 2 (H2)</h2>
        <p className="label text-text-muted mt-2">IBM Plex Sans • 32px/48px • 500 • 1.2</p>
      </div>
      <div>
        <h3 className="h3">Heading 3 (H3)</h3>
        <p className="label text-text-muted mt-2">IBM Plex Sans • 24px/32px • 500 • 1.2</p>
      </div>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="subtitle-medium">Subtitle Medium</p>
        <p className="label text-text-muted mt-2">IBM Plex Sans • 20px/24px • 500 • 1.4</p>
      </div>
      <div>
        <p className="subtitle">Subtitle</p>
        <p className="label text-text-muted mt-2">IBM Plex Sans • 20px/24px • 400 • 1.4</p>
      </div>
      <div>
        <p className="body">
          Body text. This is the default body style used for paragraphs and longer content. It provides good readability with comfortable line height and appropriate font size.
        </p>
        <p className="label text-text-muted mt-2">IBM Plex Sans • 18px/20px • 400 • 1.5</p>
      </div>
    </div>
  ),
};

export const MonoText: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="caption-medium">Caption Medium</p>
        <p className="label text-text-muted mt-2">IBM Plex Mono • 14px/16px • 500 • 1.4</p>
      </div>
      <div>
        <p className="caption">Caption</p>
        <p className="label text-text-muted mt-2">IBM Plex Mono • 14px/16px • 400 • 1.4</p>
      </div>
      <div>
        <p className="label-medium">Label Medium</p>
        <p className="label text-text-muted mt-2">IBM Plex Mono • 13px/14px • 500 • 1.4</p>
      </div>
      <div>
        <p className="label">Label</p>
        <p className="label text-text-muted mt-2">IBM Plex Mono • 13px/14px • 400 • 1.4</p>
      </div>
    </div>
  ),
};

export const AllStyles: Story = {
  render: () => (
    <div className="space-y-12 max-w-4xl">
      <section>
        <h2 className="h2 mb-6">IBM Plex Sans</h2>
        <div className="space-y-6">
          <div>
            <h1 className="h1">The quick brown fox jumps over the lazy dog</h1>
            <p className="label text-text-muted mt-2">.h1</p>
          </div>
          <div>
            <h2 className="h2">The quick brown fox jumps over the lazy dog</h2>
            <p className="label text-text-muted mt-2">.h2</p>
          </div>
          <div>
            <h3 className="h3">The quick brown fox jumps over the lazy dog</h3>
            <p className="label text-text-muted mt-2">.h3</p>
          </div>
          <div>
            <p className="subtitle-medium">The quick brown fox jumps over the lazy dog</p>
            <p className="label text-text-muted mt-2">.subtitle-medium</p>
          </div>
          <div>
            <p className="subtitle">The quick brown fox jumps over the lazy dog</p>
            <p className="label text-text-muted mt-2">.subtitle</p>
          </div>
          <div>
            <p className="body">
              The quick brown fox jumps over the lazy dog. This is body text used for paragraphs and longer content blocks. It provides comfortable reading experience with appropriate line height.
            </p>
            <p className="label text-text-muted mt-2">.body</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="h2 mb-6">IBM Plex Mono</h2>
        <div className="space-y-6">
          <div>
            <p className="caption-medium">The quick brown fox jumps over the lazy dog</p>
            <p className="label text-text-muted mt-2">.caption-medium</p>
          </div>
          <div>
            <p className="caption">The quick brown fox jumps over the lazy dog</p>
            <p className="label text-text-muted mt-2">.caption</p>
          </div>
          <div>
            <p className="label-medium">The quick brown fox jumps over the lazy dog</p>
            <p className="label text-text-muted mt-2">.label-medium</p>
          </div>
          <div>
            <p className="label">The quick brown fox jumps over the lazy dog</p>
            <p className="label text-text-muted mt-2">.label</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="h2 mb-6">Text Colors</h2>
        <div className="space-y-4">
          <p className="body text-foreground">text-foreground (default)</p>
          <p className="body text-text-muted">text-text-muted</p>
          <p className="body text-accent">text-accent</p>
          <p className="body text-black-40">text-black-40</p>
        </div>
      </section>
    </div>
  ),
};

export const InComponents: Story = {
  render: () => (
    <div className="space-y-12 max-w-4xl">
      <section>
        <h2 className="h2 mb-4">Example: Article</h2>
        <article className="space-y-6">
          <h1 className="h1">Article Title</h1>
          <p className="subtitle-medium text-text-muted">
            A subtitle that provides context or summary
          </p>
          <div className="space-y-4">
            <p className="body">
              This is the body text of an article. It uses the body class which provides
              comfortable reading experience. The line height and font size are optimized
              for readability.
            </p>
            <p className="body">
              Multiple paragraphs create a natural reading flow. The typography system
              ensures consistency across the entire application.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="label-medium text-text-muted">Tag 1</span>
            <span className="label-medium text-text-muted">Tag 2</span>
            <span className="label-medium text-text-muted">Tag 3</span>
          </div>
        </article>
      </section>

      <section>
        <h2 className="h2 mb-4">Example: Card</h2>
        <div className="bg-surface p-6 rounded-sm border border-border-subtle">
          <h3 className="h3 mb-2">Card Title</h3>
          <p className="caption text-text-muted mb-4">Card metadata or date</p>
          <p className="body mb-4">
            Card content goes here. This demonstrates how typography styles work together
            in a card component.
          </p>
          <button className="label-medium text-accent">Action Button</button>
        </div>
      </section>

      <section>
        <h2 className="h2 mb-4">Typography in UI Components</h2>
        <div className="space-y-6">
          <div>
            <p className="label text-text-muted mb-2">Button uses: label-medium</p>
            <button className="inline-flex items-center justify-center rounded-sm px-4 py-2 label-medium bg-foreground text-background">
              Button Text
            </button>
          </div>
          <div>
            <p className="label text-text-muted mb-2">Tag uses: label-medium</p>
            <span className="inline-flex items-center rounded-xs bg-tag-surface px-3 pt-[7px] pb-[7px] label-medium border border-transparent">
              Tag Label
            </span>
          </div>
          <div>
            <p className="label text-text-muted mb-2">Input label uses: label-medium</p>
            <div className="space-y-1.5">
              <label className="label-medium text-text-muted">Input Label</label>
              <input
                type="text"
                placeholder="Placeholder text"
                className="w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 caption text-foreground"
              />
            </div>
          </div>
          <div>
            <p className="label text-text-muted mb-2">Input/Textarea use: caption</p>
            <textarea
              placeholder="Textarea with caption style"
              className="w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 caption text-foreground resize-none"
              rows={3}
            />
          </div>
          <div>
            <p className="label text-text-muted mb-2">TextLink uses: caption-medium</p>
            <a href="#" className="caption-medium text-foreground underline underline-offset-4">
              Link Text
            </a>
          </div>
        </div>
      </section>
    </div>
  ),
};
