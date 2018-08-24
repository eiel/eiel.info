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

const title = 'グリーンリボンを応援する会';
const description =
  'グリーンリボンをシンボルに、移植医療の普及活動する人たちを応援しています。';
const filename = 'GreenRibbon.jsx';

const RibbonButton = () => (
  <div styleName="bannar">
    <Button href="http://www.green-ribbon.jp/">
      グリーンリボンキャンペーンの<br />サイトで学ぶ
    </Button>
  </div>
);

const JotButton = () => (
  <div styleName="bannar">
    <Button href="https://www2.jotnw.or.jp/">
      臓器提供意思登録をする
    </Button>
  </div>
);

const Title = () => <h1 styleName="title">{title}</h1>;

const Catch = () => (
  <div styleName="catchcopy">
    <small>YesでもNoでも命を救える</small>
    <strong>臓器提供の意思登録をしよう</strong>
  </div>
);

const LinkSection = () => (
  <div>
    <h1 styleName="h1">リンク</h1>
    <ul styleName="site">{Links.map(Link)}</ul>
  </div>
);

const Lead = () => <Markdown styleName="lead" source={lead} />;

const GreenRibbon = ({ isDev }: { isDev: boolean }) => (
  <DefaultTemplate {...{ title, description, isDev }}>
    <Title />
    <Catch />
    <RibbonButton />
    <Lead />
    <JotButton />
    <LinkSection />
    <JotButton />
    <EditButton {...{ filename }} />
  </DefaultTemplate>
);

export default GreenRibbon;
