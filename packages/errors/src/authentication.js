import { HttpError } from './http.js';

export class AuthenticationError extends HttpError {
  constructor(message) {
    super(message, 401, 'UNAUTHENTICATED');
    Object.defineProperty(this, 'name', { value: 'AuthenticationError' });
  }
}
