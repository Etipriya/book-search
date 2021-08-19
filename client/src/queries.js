// gql queries
import { gql } from "@apollo/client";

const GET_USER = gql`
  query Query {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export { GET_USER };
