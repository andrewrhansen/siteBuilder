import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { AndrewTestData } from "../../Assets/jsonTestData";

const useStyles = makeStyles({});

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderBar = (header) => {
    const { title, position, options } = header.data;
    return (
      <AppBar position={position}>
        <Toolbar>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={index}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };

  return AndrewTestData.map((atd) => {
    let component = undefined;

    switch (atd.type) {
      case "Header":
        component = renderBar(atd);
        break;
      default:
        break;
    }

    return component;
  });
}
