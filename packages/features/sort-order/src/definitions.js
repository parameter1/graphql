import { gql } from 'graphql-tag';

export default gql`

enum SortOrderEnum {
  "Sorts results by ascending values."
  ASC
  "Sorts results by descending values."
  DESC
}

`;
