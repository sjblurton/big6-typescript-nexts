import { fireEvent, render, screen } from '../../lib/test-utils';
import mockRouter from 'next-router-mock';
import SmartLink from './link';

describe('SmartLink Component', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  it('renders an internal link with correct attributes', () => {
    render(<SmartLink href="/internal">Internal Link</SmartLink>);
    const linkElement = screen.getByText('Internal Link');

    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement);
    expect(mockRouter.asPath).toEqual('/internal');
  });

  it('Does not update the external link the the router', () => {
    render(<SmartLink href="http://example.com">External Link</SmartLink>);
    const linkElement = screen.getByText('External Link');

    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement);
    expect(mockRouter.asPath).not.toEqual('http://example.com');
  });
});
