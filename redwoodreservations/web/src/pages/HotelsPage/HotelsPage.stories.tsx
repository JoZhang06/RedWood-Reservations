import type { ComponentMeta } from '@storybook/react'

import HotelsPage from './HotelsPage'

export const generated = () => {
  return <HotelsPage />
}

export default {
  title: 'Pages/HotelsPage',
  component: HotelsPage,
} as ComponentMeta<typeof HotelsPage>
