import { Meta, StoryObj } from '@storybook/react';

import { Rest } from './';

const meta = {
  title: 'SVG/Big6',
  component: Rest,
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Rest>;

export default meta;

type Story = StoryObj<typeof Rest>;

export const RestSvg: Story = {};
