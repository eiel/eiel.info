// @flow
import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';

const title = 'グリーンリボンを応援する会 - eiel.info';
const description = "Tomohiko Himura's Website. He a.k.a. eiel";

const GreenRibbon = () => (
  <DefaultTemplate {...{ title, description }}>
    <h1>{title}</h1>
  </DefaultTemplate>
);

export default GreenRibbon;
