import React from "react";
import { useQuery, useMutation } from "@apollo/client";

import { GET_AUTHORS, POST_BOOK, GET_BOOKS } from "../graphql/queries";

const AddBook = () => {
  const [addBook] = useMutation(POST_BOOK);
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [bookInfo, setBookInfo] = React.useState({
    name: "",
    genre: "",
    authorId: "",
  });

  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error :(</p>;

  const submitForm = (e) => {
    e.preventDefault();
    console.log(bookInfo);

    addBook({
      variables: {
        name: bookInfo.name,
        genre: bookInfo.genre,
        authorId: bookInfo.authorId,
      },
      refetchQueries: [{ query: GET_BOOKS }],
    });

    setBookInfo({
      name: "",
      genre: "",
      authorId: "",
    });
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e) => setBookInfo({ ...bookInfo, name: e.target.value })}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e) => setBookInfo({ ...bookInfo, genre: e.target.value })}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select
          onChange={(e) =>
            setBookInfo({ ...bookInfo, authorId: e.target.value })
          }
        >
          <option>Select author</option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
