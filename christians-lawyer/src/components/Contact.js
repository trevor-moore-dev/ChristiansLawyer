import React from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/background.png';

export default function Contact() {
    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christian’s Lawyer | Contact Us"
                meta={[
                    {
                        name: 'title',
                        content: "Christian’s Lawyer | Contact Us"
                    },
                    {
                        name: 'description',
                        content: 'Contact a Christian Lawyer for legal aid in Phoenix, Arizona'
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/contact-us'
                    }
                ]}
            />
            <img src={Background} style={{ width: '100%' }} alt="Christian Lawyer" />
        </>
    );
};