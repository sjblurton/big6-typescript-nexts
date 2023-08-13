import SmartLink from './link';

export default {
  title: 'CTA/Links',
  component: SmartLink,
  args: {
    children: 'Link',
  },
};

export const ExternalLink = {
  args: {
    href: 'https://www.google.com',
    children: 'Google',
  },
};

export const InternalLink = {
  args: {
    href: '/',
    children: 'Home',
  },
};
