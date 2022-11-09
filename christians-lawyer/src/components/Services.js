import React from "react";
import { Helmet } from 'react-helmet';
import Background from '../resources/images/background.png';

export default function Services() {
    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title="Christian’s Lawyer | Services"
                meta={[
                    {
                        name: 'title',
                        content: "Christian’s Lawyer | Services"
                    },
                    {
                        name: 'description',
                        content: "Legal services offered by Christian's Lawyer"
                    },
                    {
                        name: 'keywords',
                        content: 'Lawyer,Attorney,Legal Aid,Legal Help,Christian Lawyer,Christian Attorney,Christian,Christ,Gospel,Justice'
                    }
                ]}
                link={[
                    {
                        rel: 'canonical',
                        href: 'https://www.christianslawyer.org/services'
                    }
                ]}
            />
            <img src={Background} style={{ width: '100%' }} alt="Christian Lawyer" />
        </>
    );
};