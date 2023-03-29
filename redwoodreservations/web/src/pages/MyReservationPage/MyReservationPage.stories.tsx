import type { ComponentMeta } from '@storybook/react'

import MyReservationPage from './MyReservationPage'

export const generated = () => {
  return <MyReservationPage />
}

export default {
  title: 'Pages/MyReservationPage',
  component: MyReservationPage,
} as ComponentMeta<typeof MyReservationPage>
