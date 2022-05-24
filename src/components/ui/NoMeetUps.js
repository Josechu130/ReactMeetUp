import { useFetch } from './../../util-hooks/useFetch'
import { setMeetUps } from './../../util-hooks/localStorage'

import StarBorderIcon from '@mui/icons-material/StarBorder'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import classes from './NoFound.module.css'

export function NoMeetUps ({ generateData }) {
  const { data } = useFetch({
    url: '/data.json'
  })

  function generateMeetUps () {
    setMeetUps(data)
    generateData()
  }

  return (
    <div className={classes.container}>
        <StarBorderIcon />
        <h3>No meetups availables!</h3>
        <p>At this moment, React Meetup doesnt have meet ups avaliables, but you can create Meet ups if you access to <Link to={'/newmeetup'}>Add new meetup</Link> page</p>
        <p>or</p>
        <Button color="success" variant="outlined" onClick={() => generateMeetUps()}>Generate 3 MeetUps</Button>
    </div>
  )
}
