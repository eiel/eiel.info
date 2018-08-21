/* eslint-env browser */
/* eslint-disable react/jsx-filename-extension */
// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { routing } from './routing';
// import './index.css';

const Page = routing[window.location.hash.replace('#', '')] || routing['/'];
ReactDOM.render(<Page />, window.document.body);
