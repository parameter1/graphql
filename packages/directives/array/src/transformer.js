/* eslint-disable no-param-reassign */
import { getDirectiveArgs, mapSchema, MapperKind } from '@parameter1/graphql-utils';
import { getAsArray } from '@parameter1/object-path';

const { isArray } = Array;

/**
 * @typedef {import("graphql").GraphQLSchema} GraphQLSchema
 *
 * @param {GraphQLSchema} schema
 * @param {string} [directiveName]
 * @returns {GraphQLSchema}
 */
export function arrayDirectiveTransformer(schema, directiveName = 'array') {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const args = getDirectiveArgs(schema, fieldConfig, directiveName);
      if (!args) return;

      const { astNode } = fieldConfig;
      const definedField = astNode ? astNode.name.value : null;
      const name = args.field || definedField;

      const { resolve: defaultFieldResolver } = fieldConfig;
      fieldConfig.resolve = async (obj, ...rest) => {
        if (defaultFieldResolver) {
          const r = await defaultFieldResolver(obj, ...rest);
          return isArray(r) ? r : [];
        }
        return getAsArray(obj, name);
      };
    },
  });
}
