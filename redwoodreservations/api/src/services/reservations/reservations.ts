import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const reservations: QueryResolvers['reservations'] = () => {
  return db.reservation.findMany()
}

export const reservation: QueryResolvers['reservation'] = ({ id }) => {
  return db.reservation.findUnique({
    where: { id },
  })
}

export const createReservation: MutationResolvers['createReservation'] = ({
  input,
}) => {
  return db.reservation.create({
    data: input,
  })
}

export const updateReservation: MutationResolvers['updateReservation'] = ({
  id,
  input,
}) => {
  return db.reservation.update({
    data: input,
    where: { id },
  })
}

export const deleteReservation: MutationResolvers['deleteReservation'] = ({
  id,
}) => {
  return db.reservation.delete({
    where: { id },
  })
}
