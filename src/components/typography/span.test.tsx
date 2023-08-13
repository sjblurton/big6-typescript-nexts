import React from 'react';
import { render, screen } from '../../lib/test-utils';
import SpanComponent from './span';

describe('SpanComponent', () => {
  it('renders with the "primary" variant', () => {
    render(<SpanComponent variant="primary">Primary Span</SpanComponent>);
    const spanElement = screen.getByText('Primary Span');

    expect(spanElement).toBeInTheDocument();
  });

  it('applies custom class and styles to the component', () => {
    render(
      <SpanComponent variant="primary" className="custom-span" style={{ color: 'blue' }}>
        Custom Span
      </SpanComponent>
    );
    const customSpanElement = screen.getByText('Custom Span');

    expect(customSpanElement).toBeInTheDocument();
    expect(customSpanElement).toHaveClass('custom-span');
    expect(customSpanElement).toHaveStyle('color: blue;');
  });

  it('renders the component with a custom title attribute', () => {
    render(
      <SpanComponent variant="button" title="Custom Title">
        Button Span
      </SpanComponent>
    );
    const spanElement = screen.getByText('Button Span');

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveAttribute('title', 'Custom Title');
  });
});
