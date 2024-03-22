import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: any;
    averageRating: number;
    ratingCount: number;
    pageCount: number;
    printType: string;
    categories: any;
    language: string;
    imageLinks: {
      thumbnail: string;
    };
    accessInfo: {
      country: string;
      epub: {
        isAvailable: boolean;
      };
    };
  };
}

interface FetchBooksResponse {
  totalItems: number;
  items: Book[];
}

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchBooksResponse>("/volumes?q=subject:fiction", {
        signal: controller.signal,
      })
      .then((res) => setBooks(res.data.items))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort;
  }, []);

  return { books, error };
};

export default useBooks;
