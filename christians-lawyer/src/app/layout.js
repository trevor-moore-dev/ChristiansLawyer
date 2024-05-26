import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Theme from './theme';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Theme>
            {children}
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
