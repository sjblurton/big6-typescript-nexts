import React from 'react';
import { render, screen } from '../../lib/test-utils';
import Body from './body';

describe('Body Component', () => {
  it('renders the default "body" variant', () => {
    render(<Body variant="body">Body Text</Body>);
    const bodyElement = screen.getByText('Body Text');

    expect(bodyElement).toBeInTheDocument();
  });

  it('renders the "bodySmall" variant', () => {
    render(<Body variant="bodySmall">Small Body Text</Body>);
    const smallBodyElement = screen.getByText('Small Body Text');

    expect(smallBodyElement).toBeInTheDocument();
  });

  it('applies custom class and styles to the component', () => {
    render(
      <Body variant="body" className="custom-body" style={{ color: 'blue' }}>
        Custom Body Text
      </Body>
    );
    const customBodyElement = screen.getByText('Custom Body Text');

    expect(customBodyElement).toBeInTheDocument();
    expect(customBodyElement).toHaveClass('custom-body');
    expect(customBodyElement).toHaveStyle('color: blue;');
  });
});
