import React from 'react';
import { Typography, Grid, Paper, Icon } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import GroupsIcon from '@mui/icons-material/Groups';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import DataObjectIcon from '@mui/icons-material/DataObject';

const InformationCards = () => {
    return(
        <Grid container spacing={2} style={{ padding: "40px 0" }}>
            <Grid item xs={12} sm={4}>
                <Paper elevation={3} style={{ borderRadius: "20px", padding: "20px" }}>
                    <Icon component={FastfoodIcon} style={{ fontSize: 60, marginBottom: 20 }} />
                    <Typography variant="h6">FREE FOOD!</Typography>
                    <Typography variant="body1">Meals, snacks and plenty of caffeine will be provided throughout the weekend</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper elevation={3} style={{ borderRadius: "20px", padding: "20px" }}>
                    <Icon component={GroupsIcon} style={{ fontSize: 60, marginBottom: 20 }} />
                    <Typography variant="h6">TEAMWORK</Typography>
                    <Typography variant="body1">Teams of 2-5 students work together to tackle a data analysis challenge. Registration preference is given to pre-formed teams of 4-5. Team formation networking events will be held in the weeks prior to the event.</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper elevation={3} style={{ borderRadius: "20px", padding: "20px" }}>
                    <Icon component={TipsAndUpdatesIcon} style={{ fontSize: 60, marginBottom: 20 }} />
                    <Typography variant="h6">CONSULTANTS</Typography>
                    <Typography variant="body1">Graduates and local business professionals will be available to help you brainstorm and design throughout the event. This is a great opportunity to network with potential local employers.</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper elevation={3} style={{ borderRadius: "20px", padding: "20px" }}>
                    <Icon component={CalendarMonthIcon} style={{ fontSize: 60, marginBottom: 20 }} />
                    <Typography variant="h6">DATA CHALLENGE</Typography>
                    <Typography variant="body1">Challenge yourself by exploring a rich and complex data set. Create informative visualizations to help answer real world data problems.</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper elevation={3} style={{ borderRadius: "20px", padding: "20px" }}>
                    <Icon component={SportsScoreIcon} style={{ fontSize: 60, marginBottom: 20 }} />
                    <Typography variant="h6">NO CODING EXPERIENCE NECESSARY</Typography>
                    <Typography variant="body1">Some of the best teams have someone great at storytelling, that isn’t lost in the coding woods. DataFest prep training workshops will be held during Spring.</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper elevation={3} style={{ borderRadius: "20px", padding: "20px" }}>
                    <Icon component={DataObjectIcon} style={{ fontSize: 60, marginBottom: 20 }} />
                    <Typography variant="h6">FRIENDLY COMPETITION</Typography>
                    <Typography variant="body1">Each team will present their results to a panel of judges. Judges will select teams to win prizes for areas such as ‘Best Insight’, ‘Best Visualization’, and ‘Best use of external data’.</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default InformationCards;