/**
 *
 * @param {GraphQLRequestContext} requestContext
 */
export function isIntrospectionQuery(requestContext) {
  const { operationName, operation, request = {} } = requestContext;
  if (operationName === 'IntrospectionQuery' || request.operationName === 'IntrospectionQuery') return true;
  if (!operation || !operation.selectionSet) return false;
  return operation.selectionSet.selections.every((selection) => {
    const fieldName = selection.name.value;
    return fieldName.startsWith('__');
  });
}
