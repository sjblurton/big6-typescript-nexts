import { Meta, StoryObj } from '@storybook/react';

import Headers from './headers';

export default {
  title: 'Typography/Headers',
  component: Headers,
  args: {
    children: 'I am a Header',
  },
} satisfies Meta<typeof Headers>;

type Story = StoryObj<typeof Headers>;

export const H1: Story = {
  args: {
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
  },
};
