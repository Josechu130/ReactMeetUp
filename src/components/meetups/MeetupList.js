import { useState } from 'react'
import { getData, getNumOfFav } from '../../util-hooks/localStorage'

import MeetupItem from '../meetups/MeetupItem'
import { NoMeetUps } from '../ui/NoMeetUps'

export default function MeetupList () {
  const [data, setDataPage] = useState(getData())

  // When MeetUpItem change our state, this function allows to update the view that appears on AllMeetupsPage
  function updateData () {
    setDataPage(getData)
    getNumOfFav()
  }

  if (!data || data.length === 0) return <NoMeetUps generateData={updateData} />

  function DataList () {
    return (
      data.map((items) =>
        <MeetupItem key={items.id} item={items} setdata={updateData} />
      )
    )
  }

  return (<DataList />)
}
