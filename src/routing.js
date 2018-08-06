// @flow
import Index from './components/pages/Index';
import GreenRibbon from './components/pages/GreenRibbon';

export const routes = [
  { filename: 'index.html', Page: Index },
  { filename: 'green_ribbon/index.html', Page: GreenRibbon }
];

export const routing = routes.reduce((acc, { filename, Page }) => {
  acc[`/${filename.replace(/index.html/, '')}`] = Page;
  return acc;
}, {});

export default routing;
