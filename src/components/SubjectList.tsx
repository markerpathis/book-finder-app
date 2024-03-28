import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";

export interface Subject {
  id: number;
  name: string;
  search: string;
  iconLight: any;
  iconDark: any;
}

interface Props {
  onSelectSubject: (subject: Subject) => void;
  selectedSubject: Subject | null;
  subjectData: any;
}

const SubjectList = ({
  selectedSubject,
  onSelectSubject,
  subjectData,
}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {subjectData.map((subject: Subject) => (
          <ListItem key={subject.id} paddingY="10px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={0}
                src={
                  colorMode === "dark" ? subject.iconLight : subject.iconDark
                }
                objectFit="contain"
              />
              <Button
                onClick={() => onSelectSubject(subject)}
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  subject.id === selectedSubject?.id ? "bold" : "normal"
                }
                fontSize="lg"
                variant="link"
                paddingLeft="5px"
              >
                {subject.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SubjectList;
