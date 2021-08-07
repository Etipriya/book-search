import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
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
  }
`;

export const ADD_USER = gql`
  mutation Mutation($addUserInput: AddUserInput!) {
    addUser(input: $addUserInput) {
      token
      user {
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
  }
`;

export const SAVE_BOOK = gql`
  mutation Mutation($saveBookInput: SaveBookInput!) {
    saveBook(input: $saveBookInput) {
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

export const REMOVE_BOOK = gql`
  mutation Mutation($removeBookBookId: ID!) {
    removeBook(bookId: $removeBookBookId) {
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

// export const SIGNUP = gql`
//   mutation Mutation($addUserInput: AddUserInput!) {
//     addUser(input: $addUserInput) {
//       token
//       user {
//         _id
//         username
//         email
//       }
//     }
//   }
// `;
