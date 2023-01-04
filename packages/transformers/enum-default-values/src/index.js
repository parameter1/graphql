import { mapSchema, MapperKind } from '@parameter1/graphql-utils';
import { get, getAsArray } from '@parameter1/object-path';

/**
 * @typedef {import("graphql").GraphQLSchema} GraphQLSchema
 *
 * @param {GraphQLSchema} schema
 * @param {string} [directiveName]
 * @returns {GraphQLSchema}
 */
export function enumDefaultValuesTransformer(schema, enums) {
  const getValue = (path, throwOnNotFound = false) => {
    const value = get(enums, path);
    if (throwOnNotFound && !value) throw new Error(`Unable to find enum value for path ${path}`);
    return value;
  };

  return mapSchema(schema, {
    [MapperKind.ENUM_TYPE]: (config) => {
      getAsArray(config, '_values').forEach((valueObj) => {
        const path = `${config}.${valueObj.name}`;
        const defaultValue = getValue(path);
        if (defaultValue) valueObj.value = defaultValue; // eslint-disable-line no-param-reassign
      });
    },
  });
}
