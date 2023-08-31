import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language/index.js';

export default new GraphQLScalarType({
  name: 'Timestamp',
  description: 'Timestamp custom scalar type',
  parseValue(value) {
    if (!value) return null;
    return new Date(parseInt(value, 10));
  },
  serialize(value) {
    if (!(value instanceof Date)) return null;
    return value.getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});
