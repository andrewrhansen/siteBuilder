import React from "react";
import { Button, Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Button variant="outlined" color="default">
        {" "}
        Chris
      </Button>
      <Button variant="outlined" color="primary">
        {" "}
        Sam
      </Button>
      <Button variant="outlined" color="secondary">
        {" "}
        Andrew
      </Button>
    </Container>
  );
}

export default App;
