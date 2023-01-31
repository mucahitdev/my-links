'use client';
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddLinkIcon from '@mui/icons-material/AddLink';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import AddDialogs from '@/components/theme/add-dialogs'
import { useDispatch, useSelector } from 'react-redux';
import { setDialog, setDialogOpen } from '@/redux/dialog/dialogSlice';


const actions = [
    { icon: <AddLinkIcon />, name: 'Link', id: 0 },
    { icon: <InstagramIcon />, name: 'Instagram', id: 1 },
    { icon: <TwitterIcon />, name: 'Twitter', id: 2 },
    { icon: <LinkedInIcon />, name: 'LinkedIn', id: 3 },
    { icon: <GitHubIcon />, name: 'GitHub', id: 4 },
];

export default function AddButton() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { notSaverUserData } = useSelector(state => state.user)

    const actionsFiltered = actions.filter(action => {
        if (notSaverUserData.socials.length > 0) {
            if (action.id === 0) return true
            return !notSaverUserData.socials.some(social => social.type === action.id)
        } else {
            return true
        }
    })


    const dispatch = useDispatch()


    const handleAction = (e) => {
        dispatch(setDialog(e))
        dispatch(setDialogOpen(true))
        setOpen(false)
    }
    return (
        <>
            <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial controlled open example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actionsFiltered.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => handleAction(action)}
                        />
                    ))}
                </SpeedDial>
            </Box>
            <AddDialogs />
        </>
    )
}