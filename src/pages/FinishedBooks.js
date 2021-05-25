import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import FinishedList from "../../src/components/Book/FinishedList";

const FinishedBooks = () => {
  const bookCollection = useSelector((state) => {
    return state.books.finishList;
  });
  return (
    <PageLayout>
      {bookCollection.length ? (
        bookCollection.map((book) => <FinishedList key={book.id} book={book} />)
      ) : (
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to="/">Discover</Link>{" "}
          page to add books to your list.
        </p>
      )}
    </PageLayout>
  );
};

export default FinishedBooks;
