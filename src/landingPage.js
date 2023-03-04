import React from 'react';
import { Typography, Button, Container, Grid, AppBar, Toolbar, createTheme, ThemeProvider  } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: '#006633'
      }
    }
  });


const LandingPage = () => {
    return (
        <ThemeProvider theme={theme}>
        <div>
          <AppBar position="static">
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <Typography variant="h6">
                CSUS DataFest
              </Typography>
              <Button color="inherit">TEMP BUTTON</Button>
            </Toolbar>
          </AppBar>
          <div style={{ backgroundColor: '#f8f8f8', padding: '8rem 0' }}>
            <Container maxWidth="md" align="center">
              <Typography variant="h1" component="h1" gutterBottom>
                Welcome to CSUS DataFest
              </Typography>
              <Typography variant="h5" paragraph>
                Hackathon Hub is the go-to place for finding hackathons near you and learning about the latest technologies and trends in the tech industry.
              </Typography>
              <div style={{ marginTop: '3rem' }}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Register here !
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </div>
      </ThemeProvider>
    );
  };
  
  export default LandingPage;