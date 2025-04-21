export class HttpException extends Error {
  message: string;
  statusCode: number;
  errors: any;

  constructor(message: string, statusCode: number, error: any) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errors = error;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
