import { render } from '@redwoodjs/testing/web'

import HotelsPage from './HotelsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HotelsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HotelsPage />)
    }).not.toThrow()
  })
})
