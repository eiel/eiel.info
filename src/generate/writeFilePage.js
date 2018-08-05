// @flow
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';

const writeFilePage = ({
  filename,
  Page
}: {
  filename: string,
  Page: Component
}): Promise<{ path: string, html: string }> => {
  const content = ReactDOMServer.renderToStaticMarkup(<Page />);
  const html = `<!DOCTYPE html>${content}`;
  return new Promise((resolve, reject) => {
    const path = `public/${filename}`;
    fs.writeFile(path, html, err => {
      if (err) reject(err);
      else resolve({ path, html });
    });
  });
};

export default writeFilePage;
