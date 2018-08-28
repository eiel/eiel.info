import React from 'react';

export const GTMBody = ({ id }: { id: string }) => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${id}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
);

export default GTMBody;
