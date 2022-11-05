import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';

const cache = createEmotionCache();

function ChristiansLawyer() {
    return (
        <CacheProvider value={cache}>
            <App client />
        </CacheProvider>
    );
};

const container = document.getElementById('root');
hydrateRoot(container, <ChristiansLawyer />);