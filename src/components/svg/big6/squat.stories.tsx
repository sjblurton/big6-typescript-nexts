import { Meta, StoryObj } from '@storybook/react';
import { Squat } from './';

const meta = {
  title: 'SVG/Big6',
  component: Squat,
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Squat>;

export default meta;

type Story = StoryObj<typeof Squat>;

export const SquatSvg: Story = {};
