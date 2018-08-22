// @flow
import React from 'react';
import './EditButton.css';

const href = src =>
  `https://github.com/eiel/eiel.info/blob/master/src/components/pages/${src}`;

export const EditButton = ({ filename }: { filename: string }) => (
  <a styleName="button" href={href(filename)}>
    <span>このページを編集する</span>
  </a>
);
export default EditButton;
