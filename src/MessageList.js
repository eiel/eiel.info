// @flow
import moment from 'moment';
import h from 'react-hyperscript';
import {Card, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

export default ({messages, time}) => {
    return h('div', messages.map(({message, created_at, photoURL}) => {
        return h(Card, {expanded: false},
                h(CardHeader, {
                    title: message,
                    subtitle: moment(created_at).from(time),
                    avatar: h(Avatar, {src: photoURL})
                })
        )
    }));
}
