import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  {
    books {
      id
      name
    }
  }
`;

const GET_AUTHORS = gql`
  {
    authors {
      id
      name
    }
  }
`;

const POST_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { GET_BOOKS, GET_AUTHORS, POST_BOOK };
