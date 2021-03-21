import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid, Typography } from "@material-ui/core";
import { AndrewTestData } from "../../Assets/jsonTestData";

export default function FoodMenu() {
  const useStyles = makeStyles({});
  const classes = useStyles();
  const renderMenu = (menu) => {
    const menuList = menu.data.menuList;
    console.log(menuList);
    return (
      <div>
        {menuList.map((item, index) => (
          <div className={classes.section1} key={index}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {item.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6">
                  {item.price}
                </Typography>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="body2">
              {item.desc}
            </Typography>
            <Divider variant="middle" />
          </div>
        ))}
      </div>
    );
  };
  return AndrewTestData.map((atd) => {
    let component = undefined;

    switch (atd.type) {
      case "Menu":
        component = renderMenu(atd);
        break;
      default:
        break;
    }

    return component;
  });
}
