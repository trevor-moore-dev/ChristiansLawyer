import {
    Grid,
    Typography,
    Divider
} from '@mui/material';
import Image from 'next/image';
import onlineLegalConsultation from '../../../public/online-legal-consultation.png';
import legalPlans from '../../../public/legal-plans.jpg';
import spiritualPlans from '../../../public/spiritual-plans.jpg';

export const metadata = {
    title: 'Christians Lawyer | Services',
    description: 'Legal services offered by Christians Lawyer',
    keywords: ['Lawyer','Attorney','Legal Aid','Legal Help','Christian Lawyer','Christian Attorney','Christian','Christ','Gospel','Justice','Phoenix','Phoenix Arizona','Arizona'],
    alternates: {
        canonical: 'https://www.christianslawyer.org/services'
    }
}

export default function Services() {
    return (
        <>
            <Typography variant='h1' sx={{ pt: 6, fontSize: '2rem', textAlign: 'center' }}>
                Services
            </Typography>
            <Grid container sx={{ width: { xs: '90%', md: '60%', lg: '80%' }, margin: '0 auto' }}>
                <Grid item xs={12} md={12} lg={4} sx={{ textAlign: 'center', p: 5 }}>
                    <Image src={onlineLegalConsultation} style={{ height: '200px', maxWidth: '100%', objectFit: 'cover' }} alt="Online Legal Consultation" priority />
                    <Typography variant='h5' sx={{ py: 1, textAlign: 'center' }}>
                        Online Legal Consultation
                    </Typography>
                    <Divider variant="middle" />
                    <Typography sx={{ py: 1, textAlign: 'center' }}>
                        Let us sit down with you and look over your legal situation/matter. Do you have questions about your current plan? Do you have an upcoming matter that needs immediate attention? With a consultation, we can help get you on God&apos;s track for you.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={4} sx={{ textAlign: 'center', p: 5 }}>
                    <Image src={legalPlans} style={{ height: '200px', maxWidth: '100%', objectFit: 'cover' }} alt="Legal Plans" priority />
                    <Typography variant='h5' sx={{ py: 1, textAlign: 'center' }}>
                        Legal Plans
                    </Typography>
                    <Divider variant="middle" />
                    <Typography sx={{ py: 1, textAlign: 'center' }}>
                        Every person needs a sound spiritual plan in order to survive for eternity. Starting from an understanding of your own situation/matter, we will develop a plan with easy to follow steps.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={4} sx={{ textAlign: 'center', p: 5 }}>
                    <Image src={spiritualPlans} style={{ height: '200px', maxWidth: '100%', objectFit: 'cover' }} alt="Spiritual Plans" priority />
                    <Typography variant='h5' sx={{ py: 1, textAlign: 'center' }}>
                        Spiritual Plans
                    </Typography>
                    <Divider variant="middle" />
                    <Typography sx={{ py: 1, textAlign: 'center' }}>
                        There will come a time in your earthly or spiritual journey, when you need some additional help with your personal relationship to God. In addition to long-term spiritual support, we can be available for extra hours/support during new difficulties and other important events.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}