import React from 'react';
import { Typography, Button, Container, Grid, AppBar, Toolbar, createTheme, ThemeProvider, Box  } from '@mui/material';
import logo from './Artboard_13x.png';
import icon1 from './DF_disocrd_logo_V5-2.png';


const theme = createTheme({
    palette: {
      primary: {
        main: '#004e38'
      }
    },
    typography: {
      fontFamily: [
        'Roboto',
        'sans-serif'
      ].join(','),
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
        marginBottom: '1.5rem',
        '@media (min-width:600px)': {
          fontSize: '4rem'
        },
        '@media (min-width:960px)': {
          fontSize: '5rem'
        }
      },
      h5: {
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.5,
        marginBottom: '2rem',
        '@media (min-width:600px)': {
          fontSize: '1.75rem'
        }
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.5,
        padding: '1rem 2.5rem',
        borderRadius: '2.5rem'
      }
    }
  });

const LandingPage = () => {
    //Handle href for Register button
    const handleRegisterClick = () => {
      window.open('https://tinyurl.com/DFCSUSSignUp', '_blank');
    };
    return (
        <ThemeProvider theme={theme}>
        <div>
          <AppBar position="static">
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <img src={icon1} alt="logo" style={{width: 'auto', height: '40px' }} /> 
              <Button color="inherit">TEMP BUTTON</Button>
            </Toolbar>
          </AppBar>
          <div style={{ backgroundColor: '#f8f8f8', padding: '8rem 0' }}>
            <Container maxWidth="md" align="center">
            <img src={logo} alt="logo" style={{width: 'auto', height: '200px' }} />
              <Typography variant="h1" component="h1" gutterBottom>
                Welcome to CSUS DataFest
              </Typography>
              <Typography variant="h5" paragraph>
                Brief slogan of DataFest
              </Typography>
              <div style={{ marginTop: '3rem' }}>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={handleRegisterClick}>
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
              <Box mt={8}>
                <Box mt={4}>
                  <Button variant="contained" color="primary" style={{ borderRadius: 50, width: 400, height: 60 }}>
                    Button 1
                  </Button>
                </Box>
                <Box mt={4}>
                  <Button variant="contained" color="primary" style={{ borderRadius: 50, width: 400, height: 60 }}>
                    Button 2
                  </Button>
                </Box>
                <Box mt={4}>
                  <Button variant="contained" color="primary" style={{ borderRadius: 50, width: 400, height: 60 }}>
                    Button 3
                  </Button>
                </Box>
              </Box>
            </Container>
          </div>
          <Grid container spacing={2} alignItems="center" justify="space-between" style={{ backgroundColor: "#f0e1b0", padding: "40px" }}>
            <Grid item>
              <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px"  }}>About Us</Typography>
              <Typography variant="body1" style={{ color: "#555", fontSize: "14px" }}>
                Sacramento State University
              </Typography>
            </Grid>
            <Grid item style={{marginLeft: "auto"}}>
              <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px" }}>Contact Us</Typography>
              <Typography variant="body1" style={{ color: "#555", fontSize: "14px" }}>
                Email: info@hackathonfinder.com <br />
                Phone: 123-456-7890
              </Typography>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
  };
  
  export default LandingPage;