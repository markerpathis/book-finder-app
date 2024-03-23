import { Book } from "../hooks/useBooks";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import BookRating from "./BookRating";
import BookCover from "./BookCover";
import noImageLight from "../assets/noImageIconLight.png";
import noImageDark from "../assets/noImageIconDark.png";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  const { colorMode } = useColorMode();
  let noImageIcon = "";
  if (
    colorMode === "dark"
      ? (noImageIcon = noImageLight)
      : (noImageIcon = noImageDark)
  )
    return (
      <Card>
        <HStack>
          <BookCover
            cover={book.volumeInfo.imageLinks?.thumbnail || noImageIcon}
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
