import { Bridge } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SVG/Big6',
  component: Bridge,
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Bridge>;

export default meta;

type Story = StoryObj<typeof Bridge>;

export const BridgeSvg: Story = {};
