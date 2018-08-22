// @flow
import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import Site from '../organisms/Site';

const title = 'eiel.info';
const description = "Tomohiko Himura's Website. He a.k.a. eiel";

const Index = ({ isDev }: { isDev: boolean }) => (
  <DefaultTemplate {...{ title, description, isDev }}>
    <Site {...{ title }} />
  </DefaultTemplate>
);

export default Index;
