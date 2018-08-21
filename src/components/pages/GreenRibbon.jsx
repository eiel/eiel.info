// @flow
import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import { EditButton } from '../atoms/EditButton';
import './GreenRibbon.css';

const title = '移植医療への理解を広げる会';
const description =
  'グリーンリボンをシンボルに、移植医療のために活動する人たちを応援するためのページです。';
const filename = 'GreenRibbon.jsx';

type Link = {
  url: string,
  name: string,
  description: string
};

const links: Link[] = [
  {
    name: 'グリーンリボンキャンペーン',
    url: 'http://www.green-ribbon.jp/',
    description:
      'わかりやすい表現で、臓器医療への理解を深め、意思表示を促すためのキャンペーンサイトです。かわいい検定があり、検定に合格するとグリーンリボンのピンバッジをもらうことができます。ゆるふわな感じなのでぜひ挑戦してみてください。'
  },
  {
    name: '(公社)日本臓器移植ネットワーク',
    url: 'https://www.jotnw.or.jp/',
    description:
      'JOTと略される。臓器提供を希望する人から、移植を受けたい人へ、臓器を提供する橋渡しをしている重要な組織。'
  },
  {
    name: 'NPO法人グリーンリボン推進協会',
    url: 'https://www.greenribbonac.com/',
    description:
      '移植医療が期待したほど普及が進まないのをみて、立ち上がった市民団体。近年広島支部の活動が活発。'
  }
];

const LinkComponent = ({ url, name, description }: Link) => (
  <li>
    <a href={url}>{name}</a>
    <br />
    <p>{description}</p>
  </li>
);

const GreenRibbon = () => (
  <DefaultTemplate {...{ title, description }}>
    <h1 styleName="title">移植医療への理解を広げる会</h1>
    <p>
      このページは、「移植医療への正しい理解を広げるための活動をする人たち」を応援するために作成しました。
      結論を先に述べると、よりたくさんの人が
      <a href="http://www.green-ribbon.jp/">グリーンリボンキャンペーン</a>
      のサイトを見て、
      <a href="https://www2.jotnw.or.jp/">インターネットでの臓器提供意思表示</a>
      をして欲しいと思っています。
      その理由は、臓器医療について理解している人の数を見える化できるからです。
    </p>
    <p>
      「臓器を提供したい」「臓器を提供したくない」は人それぞれです。まったく問題ありません。
      それよりも沢山の人が移植医療について理解していることが重要だと思います。
      それが結果的に移植医療のあるべき姿へと向かっていくことだと私は考えています。
    </p>
    <h1 styleName="h1">リンク</h1>
    <ul styleName="site">{links.map(LinkComponent)}</ul>
    <EditButton {...{ filename }} />
  </DefaultTemplate>
);

export default GreenRibbon;
