import { gql } from 'graphql-tag';

export const objectDirectiveDefinitions = gql`

directive @object(field: String) on FIELD_DEFINITION

`;
