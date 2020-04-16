import { optionsToUrl } from '../src/url';

describe('test optionsToUrl method', () => {
  test.each(
    [
      [{host: 'localhost'}, 'http://localhost'],
      [{protocol: 'https', host: 'localhost'}, 'https://localhost'],
      [{host: 'localhost', port: 12345}, 'http://localhost:12345'],
      [{host: 'localhost', path: '/test'}, 'http://localhost/test'],
      [{host: 'localhost', path: '/test/test'}, 'http://localhost/test/test'],
      [{host: 'localhost', path: 'test'}, 'http://localhosttest'],
      [{host: 'localhost', port: 123, path: 'test'}, 'http://localhost:123test'],
      [{protocol: 'https', host: 'localhost', port: 1234, 'path': '/test'}, 'https://localhost:1234/test']
    ]
  )('.optionsToUrl(%o) === %s', (options, url) => {
    expect(optionsToUrl(options)).toBe(url);
  });

  test.each(
    [
      [{host: 'localhost'}, undefined, 'http://localhost'],
      [{host: 'localhost'}, '/test', 'http://localhost/test']
    ]
  )('optionstoUrl(%o, %s) === %s', (options, path, url) => {
    expect(optionsToUrl(options, path)).toBe(url);
  });
});
