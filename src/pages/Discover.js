import React from "react";
import Book from "../components/Book/Book";
import books from "../fakeData/books.json";
import PageLayout from "../components/PageLayout/PageLayout";
import { useSelector } from "react-redux";
const Discover = () => {
  const bookCollection = useSelector((state) => {
    return state.books.discoverList;
  });

  return (
    <PageLayout>
      {bookCollection.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default Discover;
