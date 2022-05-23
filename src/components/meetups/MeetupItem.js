import { addMeetUpFav, removeMeetUpFav, getNumOfFav } from './../../util-hooks/localStorage'

import classes from './MeetupItem.module.css'
import Card from '../ui/Card'

export default function MeetupItem ({ item, setdata }) {
  // Function that add meetup into favorite section
  function addToFavs (id) {
    addMeetUpFav(id)
    setdata()
    getNumOfFav()
  }

  // Function that remove meetup of favorite section
  function removeToFavs (id) {
    removeMeetUpFav(id)
    setdata()
    getNumOfFav()
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
    <Card>
      <div className={classes.image}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={classes.content}>
        <h3>{item.title}</h3>
        <address>{item.address}</address>
        <p>{item.description}</p>
        <p><strong>Date and hour:</strong></p>
        {item.date} / {item.hour}
      </div>
      <div className={classes.actions}>
        {item.fav === 'Y' ? (<button className={classes.removefabitem} onClick={() => removeToFavs(item.id)}>Remove of favorites</button>) : (<button onClick={() => addToFavs(item.id)}>Add to favorites</button>)}
      </div>
    </Card>
  </li>
  )
}
