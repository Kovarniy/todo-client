import {Params} from '@angular/router';

type UrlGetter = (urlParams?: Params) => string;

export type UrlToGetter = (url: TemplateStringsArray) => UrlGetter;

export class EndpointGetter {
  constructor(private base: string) {}

  toEndpoint(endpoint: string): UrlGetter {
    const url = this.base + endpoint;
    return (params: Params = {}) => {
      let _url = url;

      Object.entries(params).forEach(([key, value]) => {
        if (!endpoint.includes(key)) {
          this.warn(key, endpoint, params);
        } else {
          _url = _url.replace(`:${key}`, String(value));
        }
      });
      return _url;
    };
  }

  private warn(key: string, endpoint: string, params: Params) {
    console.warn(
      `No parameter ":${key}" found in endpoint ${endpoint}`,
      params,
    );
  }
}
