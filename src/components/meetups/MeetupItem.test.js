/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, shallow } from 'enzyme'
import MeetupItem from './MeetupItem'

test('<MeetupItem/> renders without crashing with props', () => {
  const data = {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    date: '2022-05-29',
    hour: '18:30',
    fav: 'N'
  }
  // Simula la función que se llama desde meetup Items para añadir a favoritos un meetup
  const updateData = jest.fn()
  const wrapper = shallow(<MeetupItem item={data} setdata={updateData}/>)
  expect(wrapper.exists()).toBe(true)
})

test('<MeetupItem/> add to favs and check if counter works', () => {
  const data = {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    date: '2022-05-29',
    hour: '18:30',
    fav: 'N'
  }
  // Simula la función que se llama desde meetup Items para añadir a favoritos un meetup
  const updateData = jest.fn()
  const wrapper = shallow(<MeetupItem item={data} setdata={updateData}/>)
  wrapper.find('button').simulate('click')
})
