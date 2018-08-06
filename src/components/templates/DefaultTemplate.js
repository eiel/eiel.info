// @flow
import React, { Component } from 'react';

type DefaultTemplateProps = {
  title: string,
  description: string,
  children: Component<{}>
};
const DefaultTemplate = ({
  title,
  description,
  children
}: DefaultTemplateProps) => (
  <html lang="ja">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
    </head>
    <body>
      {children}
    </body>
  </html>
);

export default DefaultTemplate;
