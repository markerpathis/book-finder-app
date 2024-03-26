import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";
import SubjectList, { Subject } from "./components/SubjectList";
import { useState } from "react";
import DropdownFilter, { Filter } from "./components/DropdownFilter";
import ResultsHeading from "./components/ResultsHeading";

function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null);
  const [searchedText, setSearchedText] = useState("");

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setSearchedText(searchText)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <SubjectList
            selectedSubject={selectedSubject}
            onSelectSubject={(subject) => setSelectedSubject(subject)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <ResultsHeading
            selectedSubject={selectedSubject}
            searchedText={searchedText}
          />
          <Flex marginBottom={5}>
            <DropdownFilter
              selectedFilter={selectedFilter}
              onSelectFilter={(filter) => setSelectedFilter(filter)}
            />
          </Flex>
        </Box>
        <BookGrid
          selectedSubject={selectedSubject}
          selectedFilter={selectedFilter}
          searchedText={searchedText}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
