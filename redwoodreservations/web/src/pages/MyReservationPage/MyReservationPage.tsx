import { MetaTags } from '@redwoodjs/web'
import '../../css/Home.css'

const MyReservationPage = () => {
  return (
    <>
      <MetaTags title="My Reservation" description="MyReservation page" />

      <h2>My Personal Reservation</h2>
      <table>
        <tbody>
          <tr>
            <td>Reservation No</td>
            <td>Name</td>
            <td>Reservation Checkin Date</td>
            <td>Reservation Checkout Date</td>
            <td>Status</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default MyReservationPage
