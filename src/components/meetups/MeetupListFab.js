import { useState } from 'react'
import { getDataFavs, getNumOfFav } from '../../util-hooks/localStorage'

import MeetupItem from './MeetupItem'
import { NoFavResultFound } from '../ui/NoFavResultFound'

export default function MeetupListFab () {
  const [data, setDataPage] = useState(getDataFavs())

  // When MeetUpItem change our state, this function allows to update the view that appears on Favorites
  function updateData () {
    setDataPage(getDataFavs)
    getNumOfFav()
  }

  if (!data || data.length === 0) return <NoFavResultFound />

  function DataList () {
    return (
      data.map((items) => {
        return (
          <MeetupItem key={items.id} item={items} setdata={updateData} />
        )
      })
    )
  }

  return (<DataList />)
}
