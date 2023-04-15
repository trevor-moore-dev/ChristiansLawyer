import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import OnlineLegalConsultation from '../resources/images/online-legal-consultation.png';
import LegalPlans from '../resources/images/legal-plans.jpg';
import SpiritualPlans from '../resources/images/spiritual-plans.jpg';

export default function Services() {

    useEffect(() => {
        new Image().src = OnlineLegalConsultation;
        new Image().src = LegalPlans;
        new Image().src = SpiritualPlans;
    }, []);

    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christians Lawyer | Services"
                meta={[
                    {
                        name: 'title',
                        content: "Christians Lawyer | Services"
                    },
                    {
                        name: 'description',
                        content: "Legal services offered by Christians Lawyer"
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice,Phoenix,Phoenix Arizona,Arizona'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/services'
                    }
                ]}
            />
            <Typography variant='h1' sx={{ pt: 6, fontSize: '2rem', textAlign: 'center' }}>
                Services
            </Typography>
            <Grid container sx={{ width: { xs: '90%', md: '60%', lg: '80%' }, margin: '0 auto' }}>
                <Grid item xs={12} md={12} lg={4} sx={{ textAlign: 'center', p: 5 }}>
                    <img src={OnlineLegalConsultation} style={{ height: '200px', maxWidth: '100%', objectFit: 'cover' }} alt="Online Legal Consultation" />
                    <Typography variant='h5' sx={{ py: 1, textAlign: 'center' }}>
                        Online Legal Consultation
                    </Typography>
                    <Divider variant="middle" />
                    <Typography sx={{ py: 1, textAlign: 'center' }}>
                        Let us sit down with you and look over your legal situation/matter. Do you have questions about your current plan? Do you have an upcoming matter that needs immediate attention? With a consultation, we can help get you on God's track for you.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={4} sx={{ textAlign: 'center', p: 5 }}>
                    <img src={LegalPlans} style={{ height: '200px', maxWidth: '100%', objectFit: 'cover' }} alt="Legal Plans" />
                    <Typography variant='h5' sx={{ py: 1, textAlign: 'center' }}>
                        Legal Plans
                    </Typography>
                    <Divider variant="middle" />
                    <Typography sx={{ py: 1, textAlign: 'center' }}>
                        Every person needs a sound spiritual plan in order to survive for eternity. Starting from an understanding of your own situation/matter, we will develop a plan with easy to follow steps.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={4} sx={{ textAlign: 'center', p: 5 }}>
                    <img src={SpiritualPlans} style={{ height: '200px', maxWidth: '100%', objectFit: 'cover' }} alt="Spiritual Plans" />
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
};