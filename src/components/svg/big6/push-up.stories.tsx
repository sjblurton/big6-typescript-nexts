import { Meta, StoryObj } from '@storybook/react';
import PushUp from './push-up';

const meta = {
  title: 'SVG/Big6',
  component: PushUp,
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PushUp>;

export default meta;

type Story = StoryObj<typeof PushUp>;

export const PushUpSvg: Story = {};
