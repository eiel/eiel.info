/* eslint-env browser */
/* eslint-disable react/jsx-filename-extension */
// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { routing } from './routing';
import './index.css';

const path = window.location.pathname;
const Page = routing[path] || routing['/'];
ReactDOM.render(<Page isDev />, window.document.body);
