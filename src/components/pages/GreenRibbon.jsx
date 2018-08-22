// @flow
import React from 'react';
import Markdown from 'react-markdown';
import DefaultTemplate from '../templates/DefaultTemplate';
import { EditButton } from '../atoms/EditButton';
import { Button } from '../atoms/Button';
import { Link } from '../atoms/Link';
import './GreenRibbon.css';
import { Links } from './GreenRibbon/Links';
import lead from './GreenRibbon/Lead.md';

const title = '移植医療の発展を応援する会';
const description =
  'グリーンリボンをシンボルに、移植医療のために活動する人たちを応援するためのページです。';
const filename = 'GreenRibbon.jsx';

const RibbonButton = () =>
  <div styleName="bannar">
    <Button href="http://www.green-ribbon.jp/">
      グリーンリボンキャンペーンの<br />サイトで学ぶ
    </Button>
  </div>

const JotButton = () =>
  <div styleName="bannar">
    <Button href="https://www2.jotnw.or.jp/">
      臓器提供意思登録をする
    </Button>
  </div>


const GreenRibbon = ({ isDev }: { isDev: boolean }) => (
  <DefaultTemplate {...{ title, description, isDev }}>
    <h1 styleName="title">{title}</h1>
    <div styleName="catchcopy">
      <small>臓器を提供しないという意思も</small>
      <strong>臓器提供の意思登録をして欲しい</strong>
      <small>日本の移植医療の発展のために</small>
    </div>

    <RibbonButton/>

    <Markdown styleName="lead" source={lead} />

    <JotButton/>

    <h1 styleName="h1">リンク</h1>
    <ul styleName="site">{Links.map(Link)}</ul>

    <JotButton/>

    <EditButton {...{ filename }} />
  </DefaultTemplate>
);

export default GreenRibbon;
