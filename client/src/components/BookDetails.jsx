import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOK_DETAILS } from "../graphql/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GET_BOOK_DETAILS, {
    variables: { id: bookId },
  });

  if (loading) return <p>Loading book...</p>;
  if (error) return `Error! ${error}`;

  if (data.book) {
    return (
      <div id="book-details">
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {data.book.author.books.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div id="book-details">
        <div>No details found</div>
      </div>
    );
  }
};

export default BookDetails;
