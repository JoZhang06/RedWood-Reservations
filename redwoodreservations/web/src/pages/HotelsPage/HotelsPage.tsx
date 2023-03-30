import { useState } from 'react'
import '../../css/Hotels.css'

const HotelsPage = () => {
  const [hotels] = useState([
    {
      id: 1,
      name: 'Luxury Resort',
      address: '123 Main St, San Jose',
      costPerAdult: '$200',
      costPerChild: '$100',
    },
    {
      id: 2,
      name: 'Beachfront Hotel',
      address: '456 Ocean Blvd, Puntarenas',
      costPerAdult: '$150',
      costPerChild: '$75',
    },
    {
      id: 3,
      name: 'Mountain Lodge',
      address: '789 Forest Rd, Monteverde',
      costPerAdult: '$175',
      costPerChild: '$90',
    },
  ])

  return (
    <>
      <h2>Hotels</h2>
      <table>
        <thead>
          <tr>
            <th>Hotel Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Cost per adult</th>
            <th>Cost per child</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.id}</td>
              <td>{hotel.name}</td>
              <td>{hotel.address}</td>
              <td>{hotel.costPerAdult}</td>
              <td>{hotel.costPerChild}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td cols="5">{hotels.length} hotels found</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default HotelsPage
