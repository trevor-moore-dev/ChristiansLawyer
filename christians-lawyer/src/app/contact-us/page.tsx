import {
    Grid,
    Typography,
    Link
} from '@mui/material';
import Map from './map';

export const metadata = {
    title: 'Christians Lawyer | Contact Us',
    description: 'Contact a Christian Lawyer for free legal aid',
    keywords: ['Lawyer','Attorney','Legal Aid','Legal Help','Christian Lawyer','Christian Attorney','Christian','Christ','Gospel','Justice','Phoenix','Phoenix Arizona','Arizona'],
    alternates: {
        canonical: 'https://www.christianslawyer.org/contact-us'
    }
}

export default function Contact() {
    return (
        <Grid container sx={{ pt: 6, pb: 6, width: { md: '80%', xs: '90%' }, margin: '0 auto' }}>
            <Grid item xs={12} md={6}>
                <Typography variant='h1' sx={{ pb: 3, fontSize: '2rem', textAlign: 'center' }}>
                    Contact Us
                </Typography>
                <Typography sx={{ py: 1, pr: 2 }}>
                    Email us for a referral to a Christian Lawyer via <Link href='mailto:hope@christianslawyer.org'>hope@christianslawyer.org</Link>
                </Typography>
                <Typography sx={{ py: 1, pr: 2 }}>
                    We believe that a lawyer can be a Christian that serves everyone for God&apos;s glory and their clients&apos; good (Romans 8:28-29).
                </Typography>
                <Typography sx={{ py: 1, pr: 2 }}>
                    <i>Christians Lawyer</i> is based in Arizona.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Map />
            </Grid>
        </Grid>
    );
}