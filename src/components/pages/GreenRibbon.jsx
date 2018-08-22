// @flow
import React from 'react';
import Markdown from 'react-markdown';
import DefaultTemplate from '../templates/DefaultTemplate';
import { EditButton } from '../atoms/EditButton';
import { Link } from '../atoms/Link';
import './GreenRibbon.css';
import { Links } from './GreenRibbon/Links';
import lead from './GreenRibbon/Lead.md';

const title = '移植医療への理解を広げる会';
const description =
  'グリーンリボンをシンボルに、移植医療のために活動する人たちを応援するためのページです。';
const filename = 'GreenRibbon.jsx';

const GreenRibbon = ({ isDev }: { isDev: boolean }) => (
  <DefaultTemplate {...{ title, description, isDev }}>
    <h1 styleName="title">{title}</h1>
    <Markdown source={lead} />

    <h1 styleName="h1">リンク</h1>
    <ul styleName="site">{Links.map(Link)}</ul>

    <EditButton {...{ filename }} />
  </DefaultTemplate>
);

export default GreenRibbon;
