// class CustomError extends Error {
//   constructor(message: string, public statusCode: number) {
//     super(message);
//     this.name = 'CustomError';
//   }
// }
// export default CustomError;

export class HttpError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    this.name = 'HttpError';
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string = 'Not Found') {
    super(404, message);
    this.name = 'NotFoundError';
  }
}

export class InternalServerError extends HttpError {
  constructor(message: string = 'Internal Server Error') {
    super(500, message);
    this.name = 'InternalServerError';
  }
}