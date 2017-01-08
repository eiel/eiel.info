// @flow
import moment from 'moment';
import h from 'react-hyperscript';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

export default (props) => {
    return h('div', props.messages.map((props) => {
        return h(Card, {expanded: false},
                h(CardHeader, {
                    title: props.message,
                    subtitle: moment(props.created_at).fromNow(),
                    avatar: h(Avatar, {src: props.photoURL})
                })
        )
    }));
}
