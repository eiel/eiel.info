// @flow
import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';

const title = '移植医療のために活動する人たちを応援する会';
const description =
  'グリーンリボンというシンボルを活用して、移植医療のために活動する人たちを応援するためのページ';
const src = 'GreenRibbon.js';
const href = `https://github.com/eiel/eiel.info/blob/master/src/components/pages/${src}`;

const GreenRibbon = () => (
  <DefaultTemplate {...{ title, description }}>
    <h1>{title}</h1>
    <a href={href}>編集</a>
  </DefaultTemplate>
);

export default GreenRibbon;
