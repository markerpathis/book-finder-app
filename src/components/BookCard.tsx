import React from "react";
import { Book } from "../hooks/useBooks";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import BookRating from "./BookRating";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={book.volumeInfo.imageLinks.thumbnail} />
      <CardBody>
        <Heading fontSize="2xl">{book.volumeInfo.title}</Heading>
        <HStack justifyContent="space-between">
          <Text fontSize="14px">{book.volumeInfo.authors}</Text>
          <BookRating rating={book.volumeInfo.averageRating} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default BookCard;
