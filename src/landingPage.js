import React from 'react';
import { Typography, Button, Container, Grid } from '@mui/material';




const LandingPage = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8', padding: '8rem 0' }}>
            <Container maxWidth="md" align="center">
                <Typography variant="h1" component="h1" gutterBottom>
                Welcome to CSUS DATAFEST
                </Typography>
                <Typography variant="h5" paragraph>
                Hackathon Hub is the go-to place for finding hackathons near you and learning about the latest technologies and trends in the tech industry.
                </Typography>
                <div style={{ marginTop: '3rem' }}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                    <Button variant="contained" color="primary">
                        Register
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
    );
  };
  
  export default LandingPage;