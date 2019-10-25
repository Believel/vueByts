export interface ResponseConfig<T> {
  status: number;
  statusText: string;
  headers: object;
  config: object;
  request: XMLHttpRequest;
  data: T;
}
