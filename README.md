# Book Search Engine

Book Search Engine is made for book lovers. This website makes it easier for everyone to search any book easily.

## Description

This project is created on Google Books API search engine built in MERN Stack.

Other than searching for books, users can sign up and login their account to save their favorite books.

## User Story

- AS AN avid reader
- I WANT to search for new books to read
- SO THAT I can keep a list of books to purchase

## Usage

- Application allows users to search books with keywords.
- Users are able to create an account when providing user name, email and password.
- Logged in users will are able to save their favorite books as well as delete them.
- Saved books are stored in their account, so next time they login, the books are still in their account to be viewed.

- Variables

{
"addUserInput": {
"username": "bobsmith",
"email": "bobsmith@email.com",
"password": "password123"
},
"loginInput": {
"email": "bobsmith@email.com",
"password": "password123"
},
"saveBookInput": {
"bookId": "456",
"authors": ["Alice Green"],
"title": "Your Book",
"description": "bad bad bad",
"image": "foo bar",
"link": "biz baz"
},
"removeBookBookId": "123"
}

- Query - me

query Query {
me {
\_id
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

- Mutation - addUser

mutation Mutation($addUserInput: AddUserInput!) {
addUser(input: $addUserInput) {
token
user {
\_id
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

login
mutation Mutation($loginInput: LoginInput!) {
login(input: $loginInput) {
token
user {
\_id
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

saveBook
mutation Mutation($saveBookInput: SaveBookInput!) {
saveBook(input: $saveBookInput) {
\_id
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

removeBook
mutation Mutation($removeBookBookId: ID!) {
removeBook(bookId: $removeBookBookId) {
\_id
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

## Technologies used

- MongoDB
- Express.js
- React.js

## Screenshots

![image](./images/screencapture-book-search-eti-herokuapp-2021-08-07-10_30_23.png)

![image](./images/screencapture-book-search-eti-herokuapp-2021-08-07-10_30_43.png)

## Github Link

https://github.com/Etipriya/book-search

## Deployed link

https://book-search-eti.herokuapp.com/
