import { Box, Image } from "@chakra-ui/react";

interface Props {
  cover: any;
  height: string;
}

const BookCover = ({ cover, height }: Props) => {
  if (
    cover === "/src/assets/noImageIconLight.png" ||
    cover === "/src/assets/noImageIconDark.png"
  ) {
    height = "50px";
    console.log("hey");
  }

  console.log(cover);
  return (
    <>
      <Box>
        <Image src={cover} height={height} />
      </Box>
    </>
  );
};

export default BookCover;
