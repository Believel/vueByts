export interface City {
  id: string;
  label: string;
  pid: string;
  email: string;
  count: string;
  children?: City[];
}
export type CallbackFun = (data: City[]) => void;
export type Lazyload = ( id: string, callback: CallbackFun) => void;