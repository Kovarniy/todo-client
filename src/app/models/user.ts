export interface User {
  id?: string;
  name: string;
  password: string;
  token?: string;
  roles?: string[];
}
