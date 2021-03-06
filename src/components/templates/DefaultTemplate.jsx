// @flow
import React from 'react';
import type { Node } from 'react';
import { GTMInit, GTMBody } from '../atoms';

const GTM_ID = 'GTM-T7VV63D';

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
        <GTMInit id={GTM_ID} />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" type="text/css" href="/main.css" />
      </head>
      <body>
        <GTMBody id={GTM_ID} />
        <div id="root">{children}</div>
      </body>
    </html>
  );

export default DefaultTemplate;
