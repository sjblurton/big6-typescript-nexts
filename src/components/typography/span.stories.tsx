import { Meta, StoryObj } from '@storybook/react';

import Span from './span';

export default {
  title: 'Typography/Span',
  component: Span,
} satisfies Meta<typeof Span>;

type Story = StoryObj<typeof Span>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Button: Story = {
  args: {
    children: 'Block Capital',
    variant: 'button',
  },
};
