/**
 *
 * @param {object} params
 * @param {Function} [params.fn]
 * @returns {object}
 */
export function onShutdownPlugin({ fn } = {}) {
  return {
    async serverWillStart() {
      return {
        async serverWillStop() {
          if (typeof fn === 'function') await fn();
        },
      };
    },
  };
}
