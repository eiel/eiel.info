// @flow
import { routes } from './routing';
import writeFilePage from './generate/writeFilePage';
import './index.css';

Promise.all(
  routes.map(value =>
    // eslint-disable-next-line no-console
    writeFilePage(value).then(({ path }) => console.log(`build ${path}`))
  )
).catch(err => {
  throw err;
});
