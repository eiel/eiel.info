// @flow
import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import Site from '../Site';

const title = 'eiel.info';
const description = "Tomohiko Himura's Website. He a.k.a. eiel";

const Index = () => (
  <DefaultTemplate {...{ title, description }}>
    <Site {...{ title }} />
  </DefaultTemplate>
);

export default Index;
