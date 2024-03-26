import { SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";
import BookCardContainer from "./BookCardContainer";
import { Subject } from "./SubjectList";
import { Filter } from "./DropdownFilter";

interface Props {
  selectedSubject: Subject | null;
  selectedFilter: Filter | null;
}

const BookGrid = ({ selectedSubject, selectedFilter }: Props) => {
  const { books, error, isLoading } = useBooks(selectedSubject, selectedFilter);

  const skeletons: any[] = [];

  // skeleton count will match the maxResults parameter of the API call (40)
  for (let i = 0; i < 40; i++) {
    skeletons.push(i);
  }

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <BookCardContainer key={skeleton}>
              <BookCardSkeleton />
            </BookCardContainer>
          ))}
        {!isLoading &&
          books.map((book) => (
            <BookCardContainer key={book.id}>
              <BookCard book={book} />
            </BookCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
