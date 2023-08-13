import { Meta, StoryObj } from '@storybook/react';

import SmartLink from './link';

export default {
  title: 'CTA/Links',
  component: SmartLink,
  args: {
    children: 'Link',
  },
} satisfies Meta<typeof SmartLink>;

type Story = StoryObj<typeof SmartLink>;

export const ExternalLink: Story = {
  args: {
    href: 'https://www.google.com',
    children: 'Google',
  },
};

export const InternalLink: Story = {
  args: {
    href: '/',
    children: 'Home',
  },
};
