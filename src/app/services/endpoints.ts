import {EndpointGetter, UrlToGetter} from '@app/utils';

const baseUrl = 'http://localhost:3000/';
const getter = new EndpointGetter(`${baseUrl}`);

const _: UrlToGetter = ([url]) => getter.toEndpoint(url);

export class Endpoints {
  static auth = {
    login: _`auth/login`,
    signup: _`auth/signup`,
  };
  static todo = {
    todos: _`todo/:userId`,
  };
}
