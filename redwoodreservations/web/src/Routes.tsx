// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route, Set } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Reservations" titleTo="reservations" buttonLabel="New Reservation" buttonTo="newReservation">
        <Route path="/reservations/new" page={ReservationNewReservationPage} name="newReservation" />
        <Route path="/reservations/{id:Int}/edit" page={ReservationEditReservationPage} name="editReservation" />
        <Route path="/reservations/{id:Int}" page={ReservationReservationPage} name="reservation" />
        <Route path="/reservations" page={ReservationReservationsPage} name="reservations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/myReservation" page={MyReservationPage} name="myReservation" />
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/hotels" page={HotelsPage} name="hotels" />
        <Route path="/reservationList" page={ReservationListPage} name="reservationList" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
