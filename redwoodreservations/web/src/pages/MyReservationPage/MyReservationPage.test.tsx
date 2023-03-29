import { render } from '@redwoodjs/testing/web'

import MyReservationPage from './MyReservationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyReservationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyReservationPage />)
    }).not.toThrow()
  })
})
