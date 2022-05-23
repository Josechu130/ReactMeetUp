// import { Link } from 'react-router-dom'

import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Link } from 'react-router-dom'

import classes from './NoFound.module.css'

export function NoMeetUps () {
  return (
    <div className={classes.container}>
        <StarBorderIcon />
        <h3>No meetups availables!</h3>
        <p>At this moment, React Meetup doesnt have meet ups avaliables, but you can create Meet ups if you access to <Link to={'/newmeetup'}>Add new meetup</Link> page</p>
    </div>
  )
}
