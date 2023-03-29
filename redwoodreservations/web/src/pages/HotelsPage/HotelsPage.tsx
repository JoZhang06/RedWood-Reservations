import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HotelsPage = () => {
  return (
    <>
      <MetaTags title="Hotels" description="Hotels page" />

      <h1>HotelsPage</h1>
      <p>
        Find me in <code>./web/src/pages/HotelsPage/HotelsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>hotels</code>, link to me with `
        <Link to={routes.hotels()}>Hotels</Link>`
      </p>
    </>
  )
}

export default HotelsPage
