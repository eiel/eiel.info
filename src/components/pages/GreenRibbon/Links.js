// @flow
export type Link = {
  url: string,
  name: string,
  description: string
};

export const Links: Link[] = [
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

export default Links;
