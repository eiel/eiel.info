// @flow
import React from 'react';
import Markdown from 'react-markdown';
import DefaultTemplate from '../templates/DefaultTemplate';
import { EditButton } from '../atoms/EditButton';
import { Link } from '../atoms/Link';
import './GreenRibbon.css';
import { Links } from '../../resources/GreenRibbon/Links';

const title = '移植医療への理解を広げる会';
const description =
  'グリーンリボンをシンボルに、移植医療のために活動する人たちを応援するためのページです。';
const filename = 'GreenRibbon.jsx';


const lead = `
このページは、「移植医療への正しい理解を広げるための活動をする人たち」を応援するために作成しました。

結論を先に述べると、よりたくさんの人が[グリーンリボンキャンペーン](http://www.green-ribbon.jp/)のサイトを見て、 
[インターネットでの臓器提供意思表示](https://www2.jotnw.or.jp/)をして欲しいと思っています。
その理由は、臓器医療について理解している人の数を見える化できるからです。

「臓器を提供したい」「臓器を提供したくない」は人それぞれです。まったく問題ありません。
それよりも沢山の人が移植医療について理解していることが重要だと思います。
それが結果的に移植医療のあるべき姿へと向かっていくことだと私は考えています。
`;

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
