import { Box, Image } from "@chakra-ui/react";

interface Props {
  cover: any;
  height: string;
}

const BookCover = ({ cover, height }: Props) => {
  return (
    <>
      <Box>
        <Image src={cover} height={height} />
      </Box>
    </>
  );
};

export default BookCover;
