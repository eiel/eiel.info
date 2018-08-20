import React from 'react';
import './Site.css';

const SNSList = [
  {
    href: 'https://github.com/eiel',
    label: 'GitHub'
  },
  {
    href: 'https://twitter.com/eielh',
    label: 'Twitter'
  },
  {
    href: 'https://www.facebook.com/eielh',
    label: 'Facebook'
  },
  {
    href: 'http://qiita.com/eielh',
    label: 'Qiita'
  },
  {
    href: 'https://plus.google.com/+himuratomohiko',
    label: 'Google+'
  },
  {
    href: 'http://eiel.hatenablog.com/',
    label: 'Hatena Blog - 補助人工心臓と子育てとリモートワーク'
  },
  {
    href: 'https://www.flickr.com/photos/163677625@N05/',
    label: 'Flickr'
  },
  {
    href: 'https://www.flickr.com/photos/43922152@N04/',
    label: '旧Flickr'
  }
];

const Service = ({ url, title }) => (
  <li styleName="list">
    <a styleName="text" href={url}>
      {title}
    </a>
  </li>
);

const ServiceList = ({ list }) => {
  const content = list.map(({ title, url }, index) => (
    <Service key={index} title={title} url={url} />
  ));

  return (
    <ul>
      {content}
    </ul>
  );
};

export default ({ title }) => {
  const list = SNSList.map(({ href, label }) => ({ title: label, url: href }));
  return (
    <div>
      <h1>
        {title}
      </h1>
      <ServiceList list={list} />
    </div>
  );
};
