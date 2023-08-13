import { Meta, StoryObj } from '@storybook/react';

import Button from './button';

export default {
  title: 'CTA/Buttons',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    shape: 'rounded',
  },
} satisfies Meta<typeof Button>;≈

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};
