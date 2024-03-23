import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";
import SubjectList, { Subject } from "./components/SubjectList";
import { useState } from "react";
import DropdownFilter, { Filter } from "./components/DropdownFilter";

function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
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
        <DropdownFilter
          selectedFilter={selectedFilter}
          onSelectFilter={(filter) => setSelectedFilter(filter)}
        />
        <BookGrid
          selectedSubject={selectedSubject}
          selectedFilter={selectedFilter}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
