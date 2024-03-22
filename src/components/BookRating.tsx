import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const BookRating = ({ rating }: Props) => {
  let color = rating > 3.99 ? "green" : rating > 2.99 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {rating}
    </Badge>
  );
};

export default BookRating;
