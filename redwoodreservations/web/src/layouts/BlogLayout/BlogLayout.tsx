import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.myReservation()}>My Reservations</Link>
            </li>
            <li>
              <Link to={routes.reservationList()}>Reservation List</Link>
            </li>
            <li>
              <Link to={routes.hotels()}>Hotels</Link>
            </li>
            <li>
              <Link to={routes.login()}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
export default BlogLayout
