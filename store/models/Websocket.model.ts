export interface WebsocketAction {
  type: string;
  payload: WebsocketData;
}

export interface WebsocketData {
  e: string;
  E: number;
  s: string;
  t: number;
  p: string;
  q: string;
  b: number;
  a: number;
  T: number;
  m: boolean;
  M: boolean;
}
