import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ComponentPlayground from "../ComponentPlayground";
import { ANDREW, CHRIS, SAM } from "../Assets/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const [selectedUser, setSelectedUser] = React.useState(undefined);

  const renderHeader = () => {
    return (
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.root}
      >
        <Button
          onClick={() => setSelectedUser(ANDREW)}
          variant="outlined"
          color="secondary"
        >
          Andrew
        </Button>
        <Button
          onClick={() => setSelectedUser(CHRIS)}
          variant="outlined"
          color="default"
        >
          Chris
        </Button>
        <Button
          onClick={() => setSelectedUser(SAM)}
          variant="outlined"
          color="primary"
        >
          Sam
        </Button>
      </Grid>
    );
  };

  const classes = useStyles();

  return (
    <Container>
      {renderHeader()}
      <ComponentPlayground selectedUser={selectedUser} />
    </Container>
  );
}

export default App;
