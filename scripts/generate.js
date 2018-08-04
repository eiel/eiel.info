// @flow
import routing from '../src/routing';
import writeFilePage from "../src/generate/writeFilePage";

Promise.all(
  routing.map((route) =>
    writeFilePage(route)
      .then(({path}) => console.log(`build ${path}`)))
).catch(err => { throw err; });
