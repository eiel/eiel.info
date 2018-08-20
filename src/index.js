// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { routing } from './routing';
// import './index.css';

//const Page = routing[location.pathname];
// const Page = routing[location.hash.replace('#', '')] || routing['/'];
// const Page = routing[location.hash.replace('#', '')] || routing['/'];
// eslint-disable-next-line no-undef
// ReactDOM.render(<Page />, document.body);
export default () => ReactDOM.renderToString(<Page />);
