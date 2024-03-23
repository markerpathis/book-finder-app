import { Book } from "../hooks/useBooks";
import { Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import BookRating from "./BookRating";
import BookCover from "./BookCover";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  console.log(book);
  return (
    <Card>
      <HStack>
        <BookCover
          cover={book.volumeInfo.imageLinks?.thumbnail}
          height="196px"
        />
        <CardBody paddingX={1}>
          <Heading fontSize="md">{book.volumeInfo.title}</Heading>
          <Text fontSize="sm">{book.volumeInfo.authors}</Text>
          <BookRating rating={book.volumeInfo.averageRating} />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default BookCard;
