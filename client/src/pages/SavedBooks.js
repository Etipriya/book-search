import React from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

import { ME } from "../queries";
import { REMOVE_BOOK } from "../mutations";

const SavedBooks = () => {
  // use query hook for the me query and get the data, error and loading state from graphQL
  const { data, error, loading } = useQuery(ME);

  // use mutation hook for the removeBook mutation and pass functions to handle success and error
  const [removeBook] = useMutation(REMOVE_BOOK);

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

  // if state is loading
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  // if state is error
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
