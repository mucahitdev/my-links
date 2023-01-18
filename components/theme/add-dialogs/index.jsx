'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useSelector, useDispatch } from 'react-redux';
import { setDialog, setDialogOpen } from '@/redux/dialog/dialogSlice';


export default function AddDialogs() {
    const { dialog, open } = useSelector((state) => state.dialog);

    if (!dialog) return null;

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setDialog(null));
        dispatch(setDialogOpen(false));
    };
    const placeholderLink = `https://www.${dialog?.name.toLowerCase()}.com/xxxxxxxx`

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle> {dialog?.icon} {dialog?.name} Ekle</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Linkinizin başına https:// kısmını eklemeyi unutmayın.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={`${dialog?.name} Linki`}
                        type="email"
                        placeholder={placeholderLink}
                        fullWidth
                        variant="standard"

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Çık</Button>
                    <Button onClick={handleClose}>Kaydet</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}