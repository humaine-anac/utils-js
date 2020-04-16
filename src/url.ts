export type UrlOptions = {
  protocol?: string;
  host: string;
  port?: number;
  path?: string;
};

export function optionsToUrl(options: UrlOptions, path?: string): string {
  let url = options.protocol || 'http';
  url += '://' + options.host;

  if (options.port) {
    url += ':' + options.port;
  }

  if (path) {
    url += path;
  }
  else if (options.path) {
    url  += options.path;
  }
  return url;
}
