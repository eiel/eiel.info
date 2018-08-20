// @flow
import { routes } from './routing';
import writeFilePage from './generate/writeFilePage';

Promise.all(
  routes.map(value =>
    writeFilePage(value).then(({ path }) => console.log(`build ${path}`))
  )
).catch(err => {
  throw err;
});
