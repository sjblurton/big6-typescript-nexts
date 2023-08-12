import Body from './body';

export default {
  title: 'Typography/Paragraphs',
  component: Body,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla. In nulla posuere sollicitudin aliquam. In eu mi bibendum neque. Convallis aenean et tortor at risus. Eleifend mi in nulla posuere sollicitudin. Est ultricies integer quis auctor elit sed.',
  },
};

export const P = {
  args: {
    variant: 'body',
  },
};

export const PSmall = {
  args: {
    variant: 'bodySmall',
  },
};
