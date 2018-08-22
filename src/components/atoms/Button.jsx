// @flow
import React from 'react';
import type { Node } from 'react';
import './Button.css';

export const Button = ({
  href,
  children
}: {
  href: string,
  children: Node
}) => (
  <a styleName="button" href={href}>
    <span>{children}</span>
  </a>
);
export default Button;
