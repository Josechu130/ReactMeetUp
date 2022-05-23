// Recover all the meetups that are stored on localStorage
export const getData = () => {
  const data = JSON.parse(localStorage.getItem('meetups'))
  return data !== null ? data : null
}

// Recover all the meetups that are stored on localStorage and saved as Favorites
export const getDataFavs = () => {
  const dataFavs = JSON.parse(localStorage.getItem('meetups'))
  return dataFavs !== null ? dataFavs.filter(item => item.fav === 'Y') : null
}

// Add new MeetUp on localStorage
export const setNewMeetUp = (item) => {
  const retrieveData = getData()

  if (retrieveData === null) {
    const jsonArray = [item]
    item.id = 'm1'
    localStorage.setItem('meetups', JSON.stringify(jsonArray))
  } else {
    const json = retrieveData
    const nextid = parseInt(json[json.length - 1].id.split('m')[1]) + 1
    item.id = 'm' + nextid
    json.push(item)
    console.log(json)
    localStorage.setItem('meetups', JSON.stringify(json))
  }
}

// Add a specific meetup as a favorite
export const addMeetUpFav = (id) => {
  const retrieveData = getData()
  if (retrieveData !== null) {
    const json = retrieveData
    json.filter(item => item.id === id)[0].fav = 'Y'
    localStorage.setItem('meetups', JSON.stringify(json))
  } else { return '' }
}

// Remove a specific meetup as a favorite
export const removeMeetUpFav = (id) => {
  const retrieveData = getData()
  if (retrieveData !== null) {
    const json = retrieveData
    json.filter(item => item.id === id)[0].fav = 'N'
    localStorage.setItem('meetups', JSON.stringify(json))
  } else { return '' }
}

// Update the counter that appears in Main Navigation Component
export const getNumOfFav = () => {
  const retrieveData = getData()
  if (retrieveData !== null) {
    const json = retrieveData
    const numFabs = json.filter(item => item.fav === 'Y').length
    document.getElementById('num-favs-counter').innerHTML = numFabs
  } else { return '' }
}
