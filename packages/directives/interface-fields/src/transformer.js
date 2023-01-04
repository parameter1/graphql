/* eslint-disable no-param-reassign */
import { getDirectiveArgs, mapSchema, MapperKind } from '@parameter1/graphql-utils';

/**
 * @typedef {import("graphql").GraphQLSchema} GraphQLSchema
 *
 * @param {GraphQLSchema} schema
 * @param {string} [directiveName]
 * @returns {GraphQLSchema}
 */
export function interfaceFieldsDirectiveTransformer(schema, directiveName = 'interfaceFields') {
  return mapSchema(schema, {
    [MapperKind.OBJECT_TYPE]: (objConfig) => {
      const args = getDirectiveArgs(schema, objConfig, directiveName);
      if (!args) return;

      const current = objConfig.getFields();
      objConfig.getInterfaces().forEach((iface) => {
        const fields = iface.getFields();
        Object.keys(fields).forEach((name) => {
          // eslint-disable-next-line no-underscore-dangle
          if (!current[name]) objConfig._fields[name] = fields[name];
        });
      });
    },
  });
}
