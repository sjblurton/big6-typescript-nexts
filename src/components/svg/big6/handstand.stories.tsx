import { Meta, StoryObj } from '@storybook/react';
import Handstand from './handstand';

const meta = {
  title: 'SVG/Big6',
  component: Handstand,
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Handstand>;

export default meta;

type Story = StoryObj<typeof Handstand>;

export const HandstandSvg: Story = {};
