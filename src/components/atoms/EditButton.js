// @flow
import React from 'react';

const href = src =>
  `https://github.com/eiel/eiel.info/blob/master/src/components/pages/${src}`;

export const EditButton = ({ filename }) => <a href={href(filename)}>編集</a>;
export default EditButton;
