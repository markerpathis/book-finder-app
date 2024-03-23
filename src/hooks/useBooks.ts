import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Subject } from "../components/SubjectList";

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

// subject: fantasy, fiction, science fiction, drama,
// subjects not working well: action, adventure, young adult
// orderBy: newest, relevance
// maxResults: 10 (default) - 40

interface FetchBooksResponse {
  totalItems: number;
  items: Book[];
}

const useBooks = (selectedSubject: Subject | null) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const searchBooks = (apiUrl: string) => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchBooksResponse>(apiUrl, {
        signal: controller.signal,
      })
      .then((res) => {
        setBooks(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort;
  };

  useEffect(() => {
    const subjectSearch = selectedSubject?.search || "fiction";

    searchBooks(
      `/volumes?q=subject:${subjectSearch}&orderBy=relevance&maxResults=40`
    );
  }, [selectedSubject]);

  return { books, error, isLoading };
};

export default useBooks;
