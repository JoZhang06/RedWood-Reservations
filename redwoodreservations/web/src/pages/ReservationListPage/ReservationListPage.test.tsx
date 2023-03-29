import { render } from '@redwoodjs/testing/web'

import ReservationListPage from './ReservationListPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReservationListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReservationListPage />)
    }).not.toThrow()
  })
})
