import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  {
    books {
      name
      genre
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  );
};

export default BookList;
