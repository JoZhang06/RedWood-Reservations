import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyReservationPage = () => {
  return (
    <>
      <MetaTags title="MyReservation" description="MyReservation page" />

      <h1>MyReservationPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MyReservationPage/MyReservationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>myReservation</code>, link to me with `
        <Link to={routes.myReservation()}>MyReservation</Link>`
      </p>
    </>
  )
}

export default MyReservationPage
