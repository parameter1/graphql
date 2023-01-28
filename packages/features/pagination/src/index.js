/* eslint-disable max-len */
export { default as paginationDefinitions } from './definitions.js';
export { default as paginationEnums } from './enums.js';

/**
 * @typedef PaginationInput
 * @prop {('CURSOR'|'OFFSET')} [using=CURSOR] The pagination method to use. Defaults to `CURSOR`.
 * @prop {number} [limit=10] A non-negative value that limits the number of results to return.
 * @prop {CursorPaginationInput} [cursor={}] The cursor pagination options. Will only be applied when using the `CURSOR` method.
 * @prop {OffsetPaginationInput} [offset={}] The offset pagination options. Will only be applied when using the `OFFSET` method.
 *
 * @typedef CursorPaginationInput
 * @prop {('AFTER'|'BEFORE')} [direction=AFTER] The cursor direction: either `AFTER` (next) or `BEFORE` (previous). Defaults to `AFTER` (next) pagination.
 * @prop {string|null} [value] The cursor/pointer value to return results from. In `AFTER` mode, will return the next results after the provided cursor. In `BEFORE` mode, will return the previous results before the provided cursor.
 *
 * @typedef OffsetPaginationInput
 * @prop {number} [value=0] A non-negative value to of results to skip (start from).
 *
 * @typedef PageInfo
 * @prop {boolean} hasNextPage Whether another page of results exists.
 * @prop {boolean} hasPreviousPage Whether a previous page of results exists
 * @prop {string} endCursor The final cursor of the page. Can be used as the `CursorPaginationInput.cursor` in `AFTER` mode for returning more results. Will be an empty string if no edges could be found.
 * @prop {string} startCursor The first cursor of the page. Can be used as the `CursorPaginationInput.cursor` in `BEFORE` mode for returning previous results. Will be an empty string if no edges could be found.
 * @prop {number|null} endOffset The final offset of the page. Can be used as the `OffsetPaginationInput.offset` for returning more results. Will always be `null` when paginating in `CURSOR` mode.
 * @prop {number|null} startOffset The first offset of the page. Can be used as the `OffsetPaginationInput.offset` for returning previous results. Will always be `null` when paginating in `CURSOR` mode.
 */
