// @flow
import type { Component } from 'react';
import Index from './components/pages/Index';
import GreenRibbon from './components/pages/GreenRibbon';

export const routes = [
  { filename: 'index.html', Page: Index },
  { filename: 'green-ribbon/index.html', Page: GreenRibbon }
];

export const routing = routes.reduce(
  (
    acc: { [string]: Component<*> },
    { filename, Page }: { filename: string, Page: Component<*> }
  ): {
    [string]: Component<*>
  } => {
    acc[`/${filename.replace(/index.html/, '')}`] = Page;
    return acc;
  },
  {}
);

export default routing;
