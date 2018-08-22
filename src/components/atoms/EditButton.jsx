// @flow
import React from 'react';
import Button from './Button';

const href = src =>
  `https://github.com/eiel/eiel.info/blob/master/src/components/pages/${src}`;

export const EditButton = ({ filename }: { filename: string }) => (
  <Button href={href(filename)}>
    このページを編集する
  </Button>
);
export default EditButton;
