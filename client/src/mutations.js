// gql mutations
import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

const SIGNUP = gql`
  mutation Mutation($signupInput: SignupInput!) {
    addUser(input: $signupInput) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

const SAVE_BOOK = gql`
  mutation Mutation($saveBookInput: SaveBookInput!) {
    saveBook(input: $saveBookInput) {
      _id
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

const DELETE_BOOK = gql`
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

export { LOGIN, SIGNUP, SAVE_BOOK, DELETE_BOOK };
