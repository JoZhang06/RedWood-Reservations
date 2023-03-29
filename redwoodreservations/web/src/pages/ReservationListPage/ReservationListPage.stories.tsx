import type { ComponentMeta } from '@storybook/react'

import ReservationListPage from './ReservationListPage'

export const generated = () => {
  return <ReservationListPage />
}

export default {
  title: 'Pages/ReservationListPage',
  component: ReservationListPage,
} as ComponentMeta<typeof ReservationListPage>
