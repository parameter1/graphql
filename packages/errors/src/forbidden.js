import { HttpError } from './http.js';

export class ForbiddenError extends HttpError {
  constructor(message) {
    super(message, 403);
    Object.defineProperty(this, 'name', { value: 'ForbiddenError' });
  }
}
