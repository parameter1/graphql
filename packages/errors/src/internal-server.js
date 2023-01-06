import { HttpError } from './http.js';

export class InternalServerError extends HttpError {
  constructor(message) {
    super(message, 500);
    Object.defineProperty(this, 'name', { value: 'InternalServerError' });
  }
}
