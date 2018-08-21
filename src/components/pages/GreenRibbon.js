// @flow
import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import { EditButton } from '../atoms/EditButton';
import './GreenRibbon.css';

const title = '移植医療のために活動する人たちを応援する会';
const description =
  'グリーンリボンをシンボルに、移植医療のために活動する人たちを応援するためのページです。';
const filename = 'GreenRibbon.js';

type Link = {
  url: string,
  name: string,
  description: string
};

const links: Link[] = [
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
    <h1 styleName="title">移植医療のために活動する人たちを応援する会</h1>
    <p>このページは、移植医療のために活動する人たちを応援するために用意したページです。</p>
    <p>個人だからこそできるを主眼にさまざまな情報を提供していく予定です。</p>
    <h2 styleName="h1">リンク</h2>
    <ul styleName="site">{links.map(LinkComponent)}</ul>
    <EditButton {...{ filename }} />
  </DefaultTemplate>
);

export default GreenRibbon;
