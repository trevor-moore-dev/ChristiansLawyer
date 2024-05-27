'use client';
import { useState } from 'react';
import {
    Box,
    Typography,
    IconButton
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {
    pdfjs,
    Document,
    Page
} from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './page.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = '//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

//import assuranceForEternity from '../../../public/assurance-for-eternity.pdf';

export default function Pdf() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <>
            <Document file='/assurance-for-eternity.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <Box
                className='pagination'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: { lg: '12%', md: '12%', sm: '-16px', xs: '-16px' },
                    left: '50%',
                    opacity: { lg: 0, md: 0, sm: 1, xs: 1 },
                    background: 'white',
                    color: 'black',
                    transform: 'translate(-50%)',
                    transition: 'opacity ease-in-out .2s',
                    borderRadius: '4px',
                    boxShadow: 'rgba(16, 36, 94, 0.2) 0px 30px 40px 0px',
                    zIndex: 2,
                    '&:hover': {
                        opacity: 1
                    }
                }}
            >
                <IconButton disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber => pageNumber - 1)}>
                    <NavigateBeforeIcon sx={{ color: 'grey' }} />
                </IconButton>
                <Typography sx={{ px: 1 }}>{pageNumber} of {numPages}</Typography>
                <IconButton disabled={pageNumber === numPages} onClick={() => setPageNumber(pageNumber => pageNumber + 1)}>
                    <NavigateNextIcon sx={{ color: 'grey' }} />
                </IconButton>
            </Box>
        </>
    );
}