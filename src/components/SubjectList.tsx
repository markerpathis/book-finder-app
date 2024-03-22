import {
  HStack,
  Image,
  List,
  ListItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import fictionIconLight from "../assets/fictionIconLight.png";
import fictionIconDark from "../assets/fictionIconDark.png";
import dramaIconLight from "../assets/dramaIconLight.png";
import dramaIconDark from "../assets/dramaIconDark.png";
import fantasyIconLight from "../assets/fantasyIconLight.png";
import fantasyIconDark from "../assets/fantasyIconDark.png";
import scienceIconLight from "../assets/scienceIconLight.png";
import scienceIconDark from "../assets/scienceIconDark.png";

const SubjectList = () => {
  const { colorMode } = useColorMode();

  const subjects = [
    {
      id: 1,
      name: "Fiction",
      search: "fiction",
      iconLight: fictionIconLight,
      iconDark: fictionIconDark,
    },
    {
      id: 2,
      name: "Drama",
      search: "drama",
      iconLight: dramaIconLight,
      iconDark: dramaIconDark,
    },
    {
      id: 3,
      name: "Fantasy",
      search: "fantasy",
      iconLight: fantasyIconLight,
      iconDark: fantasyIconDark,
    },
    {
      id: 4,
      name: "Science Fiction",
      search: "science+fiction",
      iconLight: scienceIconLight,
      iconDark: scienceIconDark,
    },
  ];
  console.log(colorMode);
  return (
    <List>
      {subjects.map((subject) => (
        <ListItem key={subject.id} paddingTop={2}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={0}
              src={colorMode === "dark" ? subject.iconLight : subject.iconDark}
              objectFit="contain"
            />
            <Text>{subject.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default SubjectList;
