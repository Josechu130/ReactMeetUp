import { addMeetUpFav, removeMeetUpFav, getNumOfFav } from './../../util-hooks/localStorage'

import classes from './MeetupItem.module.css'
import Card from '../ui/Card'

export default function MeetupItem (props) {
  // Function that add meetup into favorite section
  function addToFavs (id) {
    addMeetUpFav(id)
    props.setdata()
    getNumOfFav()
  }

  // Function that remove meetup of favorite section
  function removeToFavs (id) {
    removeMeetUpFav(id)
    props.setdata()
    getNumOfFav()
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
    <Card>
      <div className={classes.image}>
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.item.title}</h3>
        <address>{props.item.address}</address>
        <p>{props.item.description}</p>
        <p><strong>Date and hour:</strong></p>
        {props.item.date} / {props.item.hour}
      </div>
      <div className={classes.actions}>
        {props.item.fav === 'Y' ? (<button className={classes.removefabitem} onClick={() => removeToFavs(props.item.id)}>Remove of favorites</button>) : (<button onClick={() => addToFavs(props.item.id)}>Add to favorites</button>)}
      </div>
    </Card>
  </li>
  )
}
