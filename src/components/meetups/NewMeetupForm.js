import { setNewMeetUp, getNumOfFav } from '../../util-hooks/localStorage'
import { useNavigate } from 'react-router-dom'

import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

export default function NewMeetupForm () {
  function submitHandler (event) {
    event.preventDefault()

    const formlenght = event.target.length - 1

    const dataJson = {}

    dataJson.id = ''

    for (let i = 0; i < formlenght; i++) {
      dataJson[event.target[i].id] = event.target[i].value
    }

    setNewMeetUp(dataJson)
    getNumOfFav()
    goHome()
  }

  const navigate = useNavigate()

  const goHome = event => {
    navigate('/', { replace: true })
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title *</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image *</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address *</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description *</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date *</label>
          <input id="date" type="date" required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="hour">Hour *</label>
          <input id="hour" type="time" required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">¿Do you want keep this meetup as favorite?</label>
          <select id="fav">
            <option value='N'>No</option>
            <option value='Y'>Yes</option>
          </select>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}
