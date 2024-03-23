import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BookCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={5} overflow="hidden" width="250px" boxShadow="md">
      {children}
    </Box>
  );
};

export default BookCardContainer;
