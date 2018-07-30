// @flow
import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import pug from 'pug';
import fs from 'fs';

import Site from '../src/components/Site'

const fn = pug.compile(`doctype html
head
  meta(charset="utf-8")
  meta(http-equiv="x-ua-compatible" content="ie=edge")
  title= title
  meta(name="description" content="")
  meta(name="viewport" content="width=device-width, initial-scale=1")
  link(rel="apple-touch-icon" href="apple-touch-icon.png")
body(id="root") !{content}
`);
const title = "eiel.info"
const description = "Tomohiko Himura's Website. He a.k.a. eiel"

const write = (filename: string, Page: Component)  => {
  const content = ReactDOMServer.renderToStaticMarkup(
    <Page {...{title}} />
  )
  const html = fn({content, title, description});
  return new Promise((resolve, reject) => {
    const path = `public/${filename}`
    fs.writeFile(path, html, (err) => {
      if (err) reject(err);
      else resolve({path, html});
    })
  })
}

const map = [
  ['index.html', Site]
]
Promise.all(
  map.map(([filename, component]) => write(filename, component)
    .then(({path}) => console.log(`build ${path}`)) )
)
