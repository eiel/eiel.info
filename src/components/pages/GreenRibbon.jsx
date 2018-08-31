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
import { QAList } from './GreenRibbon/QAList';
import { Logo } from '../atoms/Logo';

const title = 'グリーンリボンを応援する会';
const description =
  'グリーンリボンをシンボルに、移植医療の普及活動する人たちを応援するページです。';
const filename = 'GreenRibbon.jsx';

const RibbonButton = () => (
  <div styleName="bannar">
    <Button href="http://www.green-ribbon.jp/">
      <span>キャンペーンサイト</span>
      <span>で学ぶ</span>
    </Button>
  </div>
);

const JotButton = () => (
  <div styleName="bannar">
    <Button href="https://www2.jotnw.or.jp/">意思登録をする</Button>
  </div>
);

const Title = () => <h1 styleName="title">{title}</h1>;

const Catch = () => (
  <div styleName="catchcopy">
    <small>YesでもNoでも命を繋げる</small>
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

const QAComponent = ({ question, answer }) => (
  <React.Fragment>
    <dt>
      Q.
      {question}
    </dt>
    <dd>
      <Markdown source={answer} />
    </dd>
  </React.Fragment>
);

const FAQ = () => (
  <section>
    <h1 styleName="h1">よくありそうな質問への回答</h1>
    <dl>{QAList.map(QAComponent)}</dl>
  </section>
);

const EventList = [
  {
    url:
      'https://www.greenribbonac.com/%E3%81%B2%E3%82%8D%E3%81%97%E3%81%BE%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%AA%E3%83%9C%E3%83%B3-%E3%83%95%E3%82%A7%E3%82%B9-2018/',
    name: 'ひろしまグリーンリボンフェス2018',
    // TODO ちゃんとイベントの日付とかいれる
    description:
      '2018-10-17(水) から 2018-10-21(日)に開催されるイベントで、楽しみながら移植医療について学ぶ一般向けのイベントです。'
  }
];

const Event = () => (
  <section>
    <h1 styleName="h1">イベント紹介</h1>
    <ul styleName="site">{EventList.map(Link)}</ul>
  </section>
);

const GreenRibbon = ({ isDev }: { isDev: boolean }) => (
  <DefaultTemplate {...{ title, description, isDev }}>
    <Title />
    <Catch />
    <Lead />
    <RibbonButton />
    <FAQ />
    <RibbonButton />
    <Event />
    <JotButton />
    <LinkSection />
    <JotButton />
    <Logo />
    <EditButton {...{ filename }} />
  </DefaultTemplate>
);

export default GreenRibbon;
