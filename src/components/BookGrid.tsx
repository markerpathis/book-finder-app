import { SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";
import BookCardContainer from "./BookCardContainer";

const BookGrid = () => {
  const { books, error, isLoading } = useBooks();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <BookCardContainer>
              <BookCardSkeleton key={skeleton} />
            </BookCardContainer>
          ))}
        {books.map((book) => (
          <BookCardContainer>
            <BookCard key={book.id} book={book} />
          </BookCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
