import React from 'react';

import Button from './button';
import { fireEvent, render } from '../../lib/test-utils';

describe('Button Component', () => {
  it('renders the button with the provided label', () => {
    const { getByText } = render(
      <Button variant="primary" shape="rounded">
        Click Me
      </Button>
    );
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button variant="primary" shape="rounded" onClick={onClickMock}>
        Click Me
      </Button>
    );
    const buttonElement = getByText('Click Me');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders a button with secondary variant', () => {
    const { getByText } = render(
      <Button variant="secondary" shape="rounded">
        Secondary Button
      </Button>
    );
    const buttonElement = getByText('Secondary Button');
    expect(buttonElement).toBeInTheDocument();
  });
});
