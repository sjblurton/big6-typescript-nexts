import { Meta, StoryObj } from '@storybook/react';
import LegRaise from './leg-raises';

const meta = {
  title: 'SVG/Big6',
  component: LegRaise,
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LegRaise>;

export default meta;

type Story = StoryObj<typeof LegRaise>;

export const LegRaiseSvg: Story = {};
