
import './App.css';
import React, { useState } from 'react';
import { Grid, AppBar, Toolbar, Button, makeStyles, Typography, ButtonGroup, IconButton } from '@material-ui/core';
import {  LocalMall, MenuRounded } from '@material-ui/icons';
import Menu from './component/Menu';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({


  bdy: {
    height: "100%",


  },
  title: {
    color: "white",
    flexGrow: "1",
    
  },
  btn: {
    color: "grey",
    '&:hover': {
      backgroundColor: "#333333"
    },
    '&:focus': {
      backgroundColor: "#333333",

    }

  },
  header: {
    backgroundColor: "#1d1d1f"
  }
})
);


function App() {
  const classes = useStyles();
  const [menuop, setmenuop] = useState(false);
  const history = useHistory();
  console.log(history);
  return (
    <>
      <Grid  container>
        <Grid xs={12} item  >
          <AppBar className={classes.header} position="static">
            <Toolbar>
              <IconButton style={{ marginRight: "3%" }} onClick={() => setmenuop(!menuop)} className={classes.btn}  >
                <MenuRounded />
              </IconButton>
              <Typography style={{fontSize:"5vw"}} className={classes.title} variant='h4'>OnlShp</Typography>

              <IconButton className={classes.btn} size="large" >
                <LocalMall />
              </IconButton>
              <ButtonGroup variant="text" size="large" aria-label="text primary button group">

                <Button onClick={() => history.push('/signin')} className={classes.btn}>Sign-in</Button>

              </ButtonGroup>
            </Toolbar>
          </AppBar>

        </Grid>

      </Grid>
      <Grid style={{display:"flex",height:"100%"}} container>
        {menuop && <Menu />}
      </Grid>
    </>
  );
}

export default App;
