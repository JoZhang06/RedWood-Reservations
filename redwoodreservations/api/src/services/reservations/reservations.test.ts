import type { Reservation } from '@prisma/client'

import {
  reservations,
  reservation,
  createReservation,
  updateReservation,
  deleteReservation,
} from './reservations'
import type { StandardScenario } from './reservations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('reservations', () => {
  scenario('returns all reservations', async (scenario: StandardScenario) => {
    const result = await reservations()

    expect(result.length).toEqual(Object.keys(scenario.reservation).length)
  })

  scenario(
    'returns a single reservation',
    async (scenario: StandardScenario) => {
      const result = await reservation({ id: scenario.reservation.one.id })

      expect(result).toEqual(scenario.reservation.one)
    }
  )

  scenario('creates a reservation', async () => {
    const result = await createReservation({
      input: {
        personId: 189060,
        roomId: 2753866,
        checkinDate: '2023-04-03T15:20:43.695Z',
        checkoutDate: '2023-04-03T15:20:43.695Z',
        numberOfAdults: 9128159,
        numberOfChildren: 8149552,
        totalReservationDays: 6272369,
        costPerAdult: 5155030.808129051,
        CostPerChild: 2257649.8527000654,
        totalCost: 2108140.4504676526,
        createdDate: '2023-04-03T15:20:43.695Z',
        status: 'String',
      },
    })

    expect(result.personId).toEqual(189060)
    expect(result.roomId).toEqual(2753866)
    expect(result.checkinDate).toEqual(new Date('2023-04-03T15:20:43.695Z'))
    expect(result.checkoutDate).toEqual(new Date('2023-04-03T15:20:43.695Z'))
    expect(result.numberOfAdults).toEqual(9128159)
    expect(result.numberOfChildren).toEqual(8149552)
    expect(result.totalReservationDays).toEqual(6272369)
    expect(result.costPerAdult).toEqual(5155030.808129051)
    expect(result.CostPerChild).toEqual(2257649.8527000654)
    expect(result.totalCost).toEqual(2108140.4504676526)
    expect(result.createdDate).toEqual(new Date('2023-04-03T15:20:43.695Z'))
    expect(result.status).toEqual('String')
  })

  scenario('updates a reservation', async (scenario: StandardScenario) => {
    const original = (await reservation({
      id: scenario.reservation.one.id,
    })) as Reservation
    const result = await updateReservation({
      id: original.id,
      input: { personId: 9366326 },
    })

    expect(result.personId).toEqual(9366326)
  })

  scenario('deletes a reservation', async (scenario: StandardScenario) => {
    const original = (await deleteReservation({
      id: scenario.reservation.one.id,
    })) as Reservation
    const result = await reservation({ id: original.id })

    expect(result).toEqual(null)
  })
})
