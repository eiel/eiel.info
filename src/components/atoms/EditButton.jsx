// @flow
import React from 'react';
import './EditButton.css';

const href = src =>
  `https://github.com/eiel/eiel.info/blob/master/src/components/pages/${src}`;

export const EditButton = ({ filename }: { filename: string }) => (
  <div styleName="button">
    <a href={href(filename)}>編集する</a>
  </div>
);
export default EditButton;
