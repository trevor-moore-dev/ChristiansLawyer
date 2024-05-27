import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Header from './header';
import Footer from './footer';
import Theme from './theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Theme>
            <Header />
            {children}
            <Footer />
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
