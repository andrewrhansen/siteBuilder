import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { ChrisTestData } from "../../Assets/jsonTestData";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default () => {
  const classes = useStyles();

  const renderCard = (card) => {
    const { title, secondary, text } = card.data;
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {secondary}
          </Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  return ChrisTestData.map((ctd) => {
    let component = undefined;

    switch (ctd.type) {
      case "Card":
        component = renderCard(ctd);
        break;
      default:
        component = (
          <div>
            default, no type for <code>{ctd.type}</code>
          </div>
        );
    }

    return component;
  });
};
