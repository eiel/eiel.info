import React from 'react'

const SNSList = [
    {
        href: "https://github.com/eiel",
        label: "GitHub",
    },
    {
        href: "https://twitter.com/eielh",
        label: "Twitter",
    },
    {
        href: "https://www.facebook.com/eielh",
        label: "Facebook",
    },
    {
        href: "http://qiita.com/eielh",
        label: "Qiita",
    },
    {
        href: "https://plus.google.com/+himuratomohiko",
        label: "Google+",
    },
    {
        href: "https://www.flickr.com/photos/43922152@N04/",
        label: "Flickr",
    }
];

const Service = ({url, title}) => {
  return (<li>
    <a href={url}>{title}</a>
  </li>)
}

const ServiceList = ({list}) => {
  const content = list.map(({title, url}, index) => {
    return <Service key={index} title={title} url={url} />
  })

  return (<ul>
    {content}
  </ul>)
}

export default ({title}) => {
  const list = SNSList.map(({href, label}) => { return { title: label, url: href } });
  return (<div>
    <h1>{title}</h1>
    <ServiceList list={list} />
  </div>)
}
