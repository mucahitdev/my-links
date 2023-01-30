'use client';
import React, { useState, useEffect, use } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import uuid from 'react-uuid';



import FormControl from '@mui/material/FormControl';

import { useSelector, useDispatch } from 'react-redux';
import { setDialog, setDialogOpen } from '@/redux/dialog/dialogSlice';
import { addSocial, addLink } from '@/redux/user/userSlice';


export default function AddDialogs() {
    const { dialog, open, saveLoading } = useSelector((state) => state.dialog);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    const [titleError, setTitleError] = useState(false);
    const [linkError, setLinkError] = useState(false);


    useEffect(() => {
        if (title.trim().length > 2) {
            setTitleError(false);
        }
        if (link.trim().length > 0) {
            setLinkError(false);
        }
    }, [title, link]);

    if (!dialog) return null;

    const isLink = dialog?.id === 0

    const handleClose = () => {
        setTitle('');
        setLink('');
        dispatch(setDialog(null));
        dispatch(setDialogOpen(false));
    };

    const handleSave = () => {
        if (isLink) {
            if (!title.trim() || !link.trim()) {
                if (!title.trim()) {
                    setTitleError(true);
                }
                if (!link.trim()) {
                    setLinkError(true);
                }
                return;
            }
        } else {
            if (!link.trim()) {
                setLinkError(true);
                return;
            }
        }
        let newLink = {
            title: isLink ? title : null,
            link,
            type: dialog.id,
            uuid: uuid()
        };
        let newSocial = {
            link,
            type: dialog.id
        };

        if (!isLink) {
            dispatch(addSocial(newSocial));
        } else {
            dispatch(addLink(newLink));
        }
        handleClose();
    };



    const placeholderLink = `https://www.${dialog?.name.toLowerCase()}.com/xxxxxxxx`

    return (
        <>
            <Box noValidate autoComplete="off">
                <Dialog open={open} onClose={handleClose}>
                    <FormControl fullWidth>
                        <DialogTitle> {dialog?.icon} {dialog?.name} Ekle</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Linkinizin başına https:// kısmını eklemeyi unutmayın.
                            </DialogContentText>
                            {
                                isLink && (
                                    <TextField
                                        error={titleError}
                                        required
                                        autoFocus
                                        margin="dense"
                                        id="title"
                                        label="Başlık"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                )
                            }
                            <TextField
                                error={linkError}
                                required
                                margin="dense"
                                id="link"
                                label={`${dialog?.name} Linki`}
                                type="url"
                                placeholder={placeholderLink}
                                fullWidth
                                variant="standard"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Çık</Button>
                            <Button onClick={handleSave} disabled={saveLoading}>
                                {
                                    saveLoading ? (
                                        <CircularProgress size={20} />
                                    ) : (
                                        'Kaydet'
                                    )
                                }
                            </Button>
                        </DialogActions>
                    </FormControl>

                </Dialog>
            </Box>
        </>
    );
}