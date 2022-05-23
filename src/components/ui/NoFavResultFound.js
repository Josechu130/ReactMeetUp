import { Link } from 'react-router-dom'

import StarBorderIcon from '@mui/icons-material/StarBorder'

import classes from './NoFound.module.css'

export function NoFavResultFound () {
  return (
    <div className={classes.container}>
        <StarBorderIcon />
        <h3>No meetups added!</h3>
        <p>If you want to add meetups on My Favorites, you must go to <Link to={'/'}>All meetups</Link>, and select all the meetups that you want to keep on this section.</p>
    </div>
  )
}
