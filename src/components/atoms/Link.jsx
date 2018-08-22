// @flow
import React from 'react';
import type { Link as Props } from '../../resources/GreenRibbon/Links';

export const Link = ({ url, name, description }: Props) => (
  <li>
    <a href={url}>{name}</a>
    <br />
    <p>{description}</p>
  </li>
);
export default Link;
