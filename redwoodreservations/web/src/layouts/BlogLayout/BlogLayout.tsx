import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}
const BlogLayout = ({ children }: BlogLayoutProps) => {
  function changeActive(link: HTMLAnchorElement) {
    // Desactivamos todos los enlaces
    const links = document.querySelectorAll('a')
    links.forEach((link: HTMLAnchorElement) => {
      link.classList.remove('active')
    })

    // Activamos el enlace seleccionado
    link.classList.add('active')
  }

  return (
    <>
      <header>
        <nav>
          <div>
            <ul>
              <li>
                <Link
                  className="active"
                  onClick={(e) => {
                    e.preventDefault()
                    changeActive(e.currentTarget as HTMLAnchorElement)
                  }}
                  to={routes.home()}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    changeActive(e.currentTarget as HTMLAnchorElement)
                  }}
                  to={routes.myReservation()}
                >
                  My Reservations
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    changeActive(e.currentTarget as HTMLAnchorElement)
                  }}
                  to={routes.reservationList()}
                >
                  Reservation List
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    changeActive(e.currentTarget as HTMLAnchorElement)
                  }}
                  to={routes.hotels()}
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    changeActive(e.currentTarget as HTMLAnchorElement)
                  }}
                  to={routes.about()}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    changeActive(e.currentTarget as HTMLAnchorElement)
                  }}
                  to={routes.login()}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
export default BlogLayout
