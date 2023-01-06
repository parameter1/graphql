import { HttpError } from './http.js';

export class UserInputError extends HttpError {
  constructor(message) {
    super(message, 400, 'BAD_USER_INPUT');
    Object.defineProperty(this, 'name', { value: 'UserInputError' });
  }
}
