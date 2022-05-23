import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

import classes from './../components/ui/NoFound.module.css'

export default function NotFound () {
  return (
    <div className={classes.container}>
        <ErrorOutlineIcon />
        <h3>This page is not available</h3>
        <p>Make sure you are correctly accessing the screen you want to access</p>
    </div>
  )
}
