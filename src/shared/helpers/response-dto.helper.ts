import { IError } from './error.helper';
import { Result } from './result.helper';

export enum CHANNELS {
  TEAM1 = 'Team1',
  TEAM2 = 'Team2',
}

export class ResponseDtoBuilder<T> {
  private _statusCode: number;
  private _traceId: string;
  private _data: T | T[];
  private _name: string;
  private _total: number;
  private _error: IError;
  private _channel: CHANNELS;

  setStatusCode(statusCode: number) {
    this._statusCode = statusCode;
    return this;
  }

  setTraceId(traceId: string) {
    this._traceId = traceId;
    return this;
  }

  setData(data: T | T[]) {
    this._data = data;
    return this;
  }

  setName(name: string) {
    this._name = name;
    return this;
  }

  setTotal(total: number) {
    this._total = total;
    return this;
  }

  setError(error: IError) {
    this._error = error;
    return this;
  }

  setChannel(channel: CHANNELS) {
    this._channel = channel;
    return this;
  }

  build() {
    return new ResponseDto<T>(
      this._statusCode,
      this._traceId,
      this._name,
      this._data,
      this._channel,
      this._total,
      this._error
    );
  }
}

class ResponseDto<T> implements Result<T> {
  statusCode: number;
  trace: {
    traceId: string;
    name: string;
    channel: CHANNELS;
  };
  payload: { data: T | T[]; total: number; error: IError };

  constructor(
    statusCode: number,
    traceId: string,
    name: string,
    data: T | T[],
    channel: CHANNELS,
    total: number,
    error: IError
  ) {
    this.statusCode = statusCode;
    this.trace = {
      traceId,
      name,
      channel,
    };
    this.payload = {
      data,
      total,
      error,
    };
  }
}

/* export class ResponseDto {
  static format<T>(
    statusCode: number,
    traceId: string,
    data: T | T[],
    name: string,
    total: number = null,
    error: IError = null
  ): Result<T> {
    return {
      statusCode,
      trace: { traceId, name },
      payload: { data, total, error },
    };
  }
} */
