import h from 'react-hyperscript';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const SNSList = [
    {
        href: "https://github.com/eiel",
        label: "GitHub",
        iconClass: "fa-github"
    },
    {
        href: "https://twitter.com/eielh",
        label: "Twitter",
        iconClass: "fa-twitter"
    },
    {
        href: "https://www.facebook.com/eielh",
        label: "Facebook",
        iconClass: "fa-facebook"
    },
    {
        href: "http://qiita.com/eielh",
        label: "Qiita",
        iconClass: "fa-search"
    },
    {
        href: "https://plus.google.com/+himuratomohiko",
        label: "Google+",
        iconClass: "fa-google-plus",
    },
    {
        href: "https://www.flickr.com/photos/43922152@N04/",
        label: "Flickr",
        iconClass: "fa-flickr"
    }
];

const SNSButton = (props) => {
    return h(RaisedButton,
        {...props,
            secondary: true,
            target: 'blank',
            icon: h(FontIcon, {className: ["fa", props.iconClass].join(" ")})
        })
};

export default (props) => {
    const buttonList = SNSList.map((sns) => h(SNSButton, sns));
    return h('div', buttonList);
}
