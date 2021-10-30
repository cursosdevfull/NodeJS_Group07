import { IError } from './error.helper';

export interface Result<T> {
  statusCode: number;
  trace: {
    traceId: string;
    name: string;
  };
  payload: { data: T | T[]; total: number; error: IError };
}
