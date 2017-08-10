import React from 'react';
import ReactDOMServer from 'react-dom/server';
import pug from 'pug';

const content = ReactDOMServer.renderToStaticMarkup(
  React.createElement("div", {}, "Hello, World")
)
const fn = pug.compile(`doctype html
head
  title= title
body !{content}
`);
const title = "eiel.info";
const html = fn({content, title});

console.log(html);
