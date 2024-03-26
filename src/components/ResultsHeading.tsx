import { Heading } from "@chakra-ui/react";
import { Subject } from "./SubjectList";

interface Props {
  selectedSubject: Subject | null;
  searchedText: string | null;
}

const ResultsHeading = ({ selectedSubject, searchedText }: Props) => {
  let headingText = "";

  if (
    searchedText
      ? (headingText = "Search Results")
      : (headingText = `${selectedSubject?.name || "Fiction"} Books`)
  )
    return (
      <Heading as="h1" marginY={5} fontSize="5xl">
        {headingText}
      </Heading>
    );
};

export default ResultsHeading;
