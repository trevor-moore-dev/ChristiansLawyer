import React from "react";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

export default function Footer() {
    return (
        <Grid container spacing={2} sx={{ textAlign: 'center', justifyContent: 'center', pt: 20, pb: 6, px: 2 }}>
            <Grid item xs={8}>
                <Divider variant="middle" />
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    Copyright © {new Date().getFullYear()} Christian's Lawyer - All Rights Reserved.
                </Typography>
            </Grid>
        </Grid>
    );
};