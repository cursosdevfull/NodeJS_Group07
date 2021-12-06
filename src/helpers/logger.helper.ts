enum TypeLog {
  INFO = 'INFO',
  ERROR = 'ERROR',
  WARN = 'WARN',
  DEBUG = 'DEBUG',
}

export default class Logger {
  static info(message: string | object): void {
    Logger.showMessage(TypeLog.INFO, message);
  }

  static error(message: string | object): void {
    Logger.showMessage(TypeLog.ERROR, message);
  }

  static warn(message: string | object): void {
    Logger.showMessage(TypeLog.WARN, message);
  }

  static debug(message: string | object): void {
    Logger.showMessage(TypeLog.DEBUG, message);
  }

  private static showMessage(typeLog: TypeLog, message: string | object): void {
    const messageToShow: string =
      typeof message === 'object' ? JSON.stringify(message) : message;

    let color = '';
    switch (typeLog) {
      case TypeLog.INFO:
        color = '#00ff00';
        break;
      case TypeLog.ERROR:
        color = '#FF0000';
        break;
      case TypeLog.WARN:
        color = '#FFA500';
        break;
      case TypeLog.DEBUG:
        color = '#0000FF';
        break;
    }

    console.log(`%c ${typeLog}: ${messageToShow}`, `color: ${color}`);
  }
}
