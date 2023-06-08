/** @format */
import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import Register from "../../feature/Auth/components/Register";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      console.log(reason);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <MenuIcon className={classes.menuButton} />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={classes.link} to="/">
                Local Store
              </Link>
            </Typography>
            <NavLink className={classes.link}>
              <Button color="inherit">Register</Button>
            </NavLink>

            <NavLink className={classes.link}>
              <Button color="inherit">Register</Button>
            </NavLink>

            <NavLink className={classes.link}>
              <Button color="inherit" onClick={handleClickOpen}>
                Register
              </Button>
            </NavLink>
          </Toolbar>
        </AppBar>

        <Dialog open={open} onClose={handleClose} disableEscapeKeyDown>
          <DialogContent>
            <DialogContentText>
              <Register closeDialog={handleClose} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
