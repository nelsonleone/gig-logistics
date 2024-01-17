"use client"

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '@/redux/customHooks';
import { forwardRef } from 'react';
import { setHideSnackbar } from '@/redux/slices/snackbarSlice';
import { inter } from '@/app/fonts';
import { Slide, SlideProps } from '@mui/material';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />
}

export default function CustomSnackbar(){

    const { showSnackbar, snackbarMssg, severity } = useAppSelector(store => store.snackbar)
    const dispatch = useAppDispatch()

    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
      dispatch(setHideSnackbar())
    }

    return(
      showSnackbar &&
      <Snackbar open={showSnackbar} TransitionComponent={SlideTransition} className={inter.className} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'right' }} key="bottomright">
        <Alert onClose={handleClose} className={inter.className} severity={severity} sx={{ width: '100%', fontFamily: "Inter, sans-serif" }}>
        {snackbarMssg}
        </Alert>
     </Snackbar>
    )
}