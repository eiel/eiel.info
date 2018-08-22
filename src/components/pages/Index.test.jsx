/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import Component from './Index';

it('render /', () => {
  const tree = renderer.create(<Component isDev={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
