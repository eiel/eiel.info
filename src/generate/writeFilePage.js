/* eslint-disable react/jsx-filename-extension, */
/* eslint-disable import/no-extraneous-dependencies */
// @flow
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { dirname } from 'path';
import fs from 'fs-extra';

const writeFilePage = async ({
  filename,
  Page
}: {
  filename: string,
  Page: Component
}): Promise<{ path: string, html: string }> => {
  const content = ReactDOMServer.renderToStaticMarkup(<Page />);
  const html = `<!DOCTYPE html>${content}`;
  const path = `public/${filename}`;
  await fs.mkdirp(dirname(path));
  await fs.writeFile(path, html);
  return { path, html };
};

export default writeFilePage;
