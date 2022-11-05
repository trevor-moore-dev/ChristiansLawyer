import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import App from '../App';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../createEmotionCache';
import manifest from '../../build/asset-manifest.json';

const renderer = (req, res) => {
    const cache = createEmotionCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
    let scripts = [], styles = [];
    for (const [key, value] of Object.entries(manifest.files)) {
        if (key.endsWith('.js')) {
            scripts.push(value);
        } else if (key.endsWith('.css')) {
            styles.push(value);
        }
    }

    const html = ReactDOMServer.renderToString(
        <CacheProvider value={cache}>
            <App server location={req.url} />
        </CacheProvider>
    );

    const emotionChunks = extractCriticalToChunks(html);
    const emotionCss = constructStyleTagsFromChunks(emotionChunks);
    const helmet = Helmet.renderStatic();

    return res.send(`
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="emotion-insertion-point" content="" />
                <link rel="apple-touch-icon" href="/logo128.png"/>
                <link rel="manifest" href="/manifest.json"/>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                ${emotionCss}
                ${styles.map(style => {
                    return `<link rel="stylesheet" type="text/css" href="${style}" />`;
                }).join('\n')}
            </head>
            <body>
                <div id="root">${html}</div>
                ${scripts.map(script => {
                    return `<script src="${script}"></script>`;
                }).join('\n')}
            </body>
        </html>
    `);
};

export { renderer };