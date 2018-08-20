import React from 'react';

const href = src =>
  `https://github.com/eiel/eiel.info/blob/master/src/components/pages/${src}`;

export const EditButton = ({ src }) => <a href={href(src)}>編集</a>;
export default EditButton;
