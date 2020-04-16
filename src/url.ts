export type UrlOptions = {
  protocol?: string;
  host: string;
  port?: number;
  path?: string;
};

export function optionsToUrl(options: UrlOptions): string {
  const protocol = options.protocol || 'http';
  let url = protocol + '://' + options.host;
  if (options.port) {
    url += ':' + options.port;
  }
  if (options.path) {
    url  += options.path;
  }
  return url;
}
