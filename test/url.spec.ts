import { optionsToUrl } from '../src/url';

describe('test optionsToUrl method', () => {
  test.each(
    [
      [{host: 'localhost'}, 'http://localhost'],
      [{protocol: 'https', host: 'localhost'}, 'https://localhost'],
      [{host: 'localhost', port: 12345}, 'http://localhost:12345'],
      [{host: 'localhost', path: '/test'}, 'http://localhost/test'],
      [{host: 'localhost', path: '/test/test'}, 'http://localhost/test/test'],
      [{protocol: 'https', host: 'localhost', port: 1234, 'path': '/test'}, 'https://localhost:1234/test']
    ]
  )('.optionsToUrl(%o) === %s', (options, url) => {
    expect(optionsToUrl(options)).toBe(url);
  });
});
