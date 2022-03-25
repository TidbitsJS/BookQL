import React from "react";
import { useQuery } from "@apollo/client";

import BookDetails from "./BookDetails";
import { GET_BOOKS } from "../graphql/queries";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [selectedBook, setSelectedBook] = React.useState(null);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={book.id} onClick={() => setSelectedBook(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      {selectedBook && <BookDetails bookId={selectedBook} />}
    </div>
  );
};

export default BookList;
