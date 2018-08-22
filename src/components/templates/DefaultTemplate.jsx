// @flow
import React from 'react';
import type { Node } from 'react';

type DefaultTemplateProps = {
  title: string,
  description: string,
  isDev: boolean,
  children: Node
};
const DefaultTemplate = ({
  title,
  description,
  isDev,
  children
}: DefaultTemplateProps) =>
  isDev ? (
    children
  ) : (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" type="text/css" href="/main.css" />
      </head>
      <body>{children}</body>
    </html>
  );

export default DefaultTemplate;
