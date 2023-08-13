import React from 'react';
import { render, screen } from '../../lib/test-utils';
import Headers from './headers';

describe('Headers Component', () => {
  it('renders the "h1" variant with correct attributes', () => {
    render(<Headers variant="h1">Header 1</Headers>);
    const h1Element = screen.getByText('Header 1');

    expect(h1Element).toBeInTheDocument();
    expect(h1Element.tagName).toBe('H1');
  });

  it('renders the "h2" variant with correct attributes', () => {
    render(<Headers variant="h2">Header 2</Headers>);
    const h2Element = screen.getByText('Header 2');

    expect(h2Element).toBeInTheDocument();
    expect(h2Element.tagName).toBe('H2');
  });

  it('applies custom class and styles to the component', () => {
    render(
      <Headers variant="h3" className="custom-header" style={{ color: 'blue' }}>
        Custom Header
      </Headers>
    );
    const customHeaderElement = screen.getByText('Custom Header');

    expect(customHeaderElement).toBeInTheDocument();
    expect(customHeaderElement).toHaveClass('custom-header');
    expect(customHeaderElement).toHaveStyle('color: blue;');
  });
});
