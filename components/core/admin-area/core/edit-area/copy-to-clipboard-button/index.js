import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Link from 'next/link';

const CopyToClipboardButton = ({ username }) => {
    const [open, setOpen] = useState(false);

    const link = `https://linkstr.vercel.app/${username}`;

    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(link);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'grey.200',
                    display: 'flex',
                    width: '100%',
                    maxWidth: '300px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px',
                }}
            >
                <p> {link} </p>
                <IconButton onClick={handleClick} color="primary">
                    <ContentCopyIcon />
                </IconButton>
                <Link href={link}
                    target="_blank"
                >
                    <IconButton color="success">
                        <ArrowOutwardIcon />
                    </IconButton>
                </Link>
                <Snackbar
                    message="Panoya kopyalandı"
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    autoHideDuration={2000}
                    onClose={() => setOpen(false)}
                    open={open}
                />
            </Box>
        </Box>
    );
};

export default CopyToClipboardButton;
