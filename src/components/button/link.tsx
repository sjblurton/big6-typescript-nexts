import React from 'react';
import { LinkProps } from 'next/link';
import { StyledLink } from './link.styles';

export type SmartLinkProps = LinkProps & {
  children: React.ReactNode;
};

function SmartLink({ href, children, ...restProps }: SmartLinkProps) {
  const isInternalLink =
    typeof href === 'string' ? isInternalString(href) : href && href.pathname && isInternalString(href.pathname);

  if (isInternalLink) {
    return (
      <StyledLink href={href} {...restProps}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledLink href={href} {...restProps} target="_blank" rel="nofollow">
      {children}
    </StyledLink>
  );
}

export default SmartLink;

const isInternalString = (href: string) => href.startsWith('/') || href.startsWith('#');
