import { gql } from 'graphql-tag';

export const arrayDirectiveDefinitions = gql`

directive @array(field: String) on FIELD_DEFINITION

`;
