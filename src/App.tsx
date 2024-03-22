import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";
import SubjectList from "./components/SubjectList";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <SubjectList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <BookGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
