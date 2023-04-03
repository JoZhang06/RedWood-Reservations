import type { Prisma, Reservation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ReservationCreateArgs>({
  reservation: {
    one: {
      data: {
        personId: 5531214,
        roomId: 1724819,
        checkinDate: '2023-04-03T15:20:43.717Z',
        checkoutDate: '2023-04-03T15:20:43.717Z',
        numberOfAdults: 8967438,
        numberOfChildren: 5478120,
        totalReservationDays: 9389343,
        costPerAdult: 7428476.061089593,
        CostPerChild: 8305180.237701471,
        totalCost: 5856645.421710651,
        createdDate: '2023-04-03T15:20:43.717Z',
        status: 'String',
      },
    },
    two: {
      data: {
        personId: 4970751,
        roomId: 419214,
        checkinDate: '2023-04-03T15:20:43.717Z',
        checkoutDate: '2023-04-03T15:20:43.717Z',
        numberOfAdults: 298062,
        numberOfChildren: 1581035,
        totalReservationDays: 9999192,
        costPerAdult: 6181861.306321614,
        CostPerChild: 5435710.847899846,
        totalCost: 5371013.011338399,
        createdDate: '2023-04-03T15:20:43.717Z',
        status: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Reservation, 'reservation'>
