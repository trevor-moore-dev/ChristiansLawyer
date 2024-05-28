import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Box from '@mui/material/Box';
import Header from './header';
import Footer from './footer';
import Theme from './theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <Theme>
            <Header />
            <Box sx={{ pt: { xs: '48px', md: '62px' } }}>
              {children}
            </Box>
            <Footer />
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}