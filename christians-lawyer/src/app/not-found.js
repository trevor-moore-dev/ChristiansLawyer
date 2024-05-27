import {
    Box,
    Alert
  } from '@mui/material';
  
  export const metadata = {
      title: 'Christians Lawyer | Not Found',
      description: 'Page Not Found',
      robots: {
        index: false
      }
  }
  
  export default function NotFound() {
      return (
        <Box sx={{ width: { md: '80%', xs: '90%' }, mx: 'auto', textAlign: 'center', mt: 12, mb: '100vh' }}>
            <Alert severity="error">Page not found.</Alert>
        </Box>
      );
  }