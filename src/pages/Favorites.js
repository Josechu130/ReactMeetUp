import MeetupListFab from '../components/meetups/MeetupListFab'
import classes from './../components/meetups/MeetupList.module.css'

export default function FavoritesPage () {
  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        <MeetupListFab />
      </ul>
    </section>
  )
}
