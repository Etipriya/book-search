import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

import { GET_USER } from "../queries";
import { DELETE_BOOK } from "../mutation";

const SavedBooks = () => {
  // use query hook for the GET_USER query and get the data, error and loading state from graphQL
  const { data, error, loading } = useQuery(GET_USER);

  // use mutation hook for the removeBook mutation and pass functions to handle success and error
  const [removeBook] = useMutation(DELETE_BOOK);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async bookId => {
    try {
      await removeBook({
        variables: {
          removeBookBookId: bookId,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  // if it's loading render a loading div

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  // if there's an error render an error div
  if (error) {
    return <h2>ERROR...</h2>;
  }

  // get the data from the graphql request
  const userData = data.me;

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${
                userData.savedBooks.length === 1 ? "book" : "books"
              }:`
            : "You have no saved books!"}
        </h2>
        <CardColumns>
          {userData.savedBooks.map(book => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteBook(book.bookId)}
                  >
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
