import { GraphQLError } from 'graphql';
import { STATUS_CODES } from 'http';

export class HttpError extends GraphQLError {
  /**
   *
   * @param {string} message
   * @param {number} statusCode
   * @param {number} [code]
   */
  constructor(message, statusCode, code) {
    let foundCound = code || STATUS_CODES[statusCode];
    if (foundCound) foundCound = foundCound.replace(/\s/g, '_').toUpperCase();
    super(message, {
      extensions: {
        code: foundCound || 'UNKNOWN_ERROR',
        statusCode,
      },
    });
    Object.defineProperty(this, 'name', { value: 'HttpError' });
  }
}
