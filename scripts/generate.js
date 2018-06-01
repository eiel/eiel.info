// @flow
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import pug from 'pug';

import Site from '../src/components/Site'

const fn = pug.compile(`doctype html
head
  meta(charset="utf-8")
  meta(http-equiv="x-ua-compatible" content="ie=edge")
  title= title
  meta(name="description" content="")
  meta(name="viewport" content="width=device-width, initial-scale=1")
  link(rel="apple-touch-icon" href="apple-touch-icon.png")
body !{content}
`);
const title = "eiel.info"
const description = "Tomohiko Himura's Website. He a.k.a. eiel"
const content = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Site, {"title": title})
)
const html = fn({content, title, description});

console.log(html);
