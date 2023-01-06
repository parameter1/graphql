import { HttpError } from './http.js';

export class NotFoundError extends HttpError {
  constructor(message) {
    super(message, 404);
    Object.defineProperty(this, 'name', { value: 'NotFoundError' });
  }
}
