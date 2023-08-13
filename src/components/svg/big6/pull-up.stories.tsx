import { Meta, StoryObj } from '@storybook/react';
import PullUp from './pull-up';

const meta = {
  title: 'SVG/Big6',
  component: PullUp,
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PullUp>;

export default meta;

type Story = StoryObj<typeof PullUp>;

export const PullUpSvg: Story = {};
