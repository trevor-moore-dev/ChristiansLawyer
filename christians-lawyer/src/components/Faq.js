import React from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/background.png';

export default function Faq() {
    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christian’s Lawyer | FAQ"
                meta={[
                    {
                        name: 'title',
                        content: "Christian’s Lawyer | FAQ"
                    },
                    {
                        name: 'description',
                        content: 'Frequently asked legal questions from a Christian perspective'
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/frequently-asked-questions'
                    }
                ]}
            />
            <img src={Background} style={{ width: '100%' }} alt="Christian Lawyer" />
        </>
    );
};