import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ReservationListPage = () => {
  return (
    <>
      <MetaTags title="ReservationList" description="ReservationList page" />

      <h1>ReservationListPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ReservationListPage/ReservationListPage.tsx</code>
      </p>
      <p>
        My default route is named <code>reservationList</code>, link to me with
        `<Link to={routes.reservationList()}>ReservationList</Link>`
      </p>
    </>
  )
}

export default ReservationListPage
