// @flow
import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import { EditButton } from '../atoms/EditButton';

const title = '移植医療のために活動する人たちを応援する会';
const description =
  'グリーンリボンというシンボルを活用して、移植医療のために活動する人たちを応援するためのページ';
const filename = 'GreenRibbon.js';

const GreenRibbon = () => (
  <DefaultTemplate {...{ title, description }}>
    <h1>{title}</h1>
    <EditButton {...{ filename }} />
  </DefaultTemplate>
);

export default GreenRibbon;
