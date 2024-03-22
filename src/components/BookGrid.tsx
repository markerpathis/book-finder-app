import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

import apiClient from "../services/api-client";

interface Book {
  key: string;
  title: string;
}

interface FetchBooksResponse {
  work_count: number;
  works: Book[];
}

const BookGrid = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchBooksResponse>("/subjects/fantasy.json")
      .then((res) => setBooks(res.data.works))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {books.map((book) => (
          <li key={book.key}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

export default BookGrid;
