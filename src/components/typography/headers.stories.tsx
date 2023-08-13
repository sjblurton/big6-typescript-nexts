import Headers from './headers';

export default {
  title: 'Typography/Headers',
  component: Headers,
  args: {
    children: 'I am a Header',
  },
};

export const H1 = {
  args: {
    variant: 'h1',
  },
};

export const H2 = {
  args: {
    variant: 'h2',
  },
};

export const H3 = {
  args: {
    variant: 'h3',
  },
};
