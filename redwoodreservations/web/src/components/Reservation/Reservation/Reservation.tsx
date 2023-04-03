import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteReservationMutationVariables,
  FindReservationById,
} from 'types/graphql'

const DELETE_RESERVATION_MUTATION = gql`
  mutation DeleteReservationMutation($id: Int!) {
    deleteReservation(id: $id) {
      id
    }
  }
`

interface Props {
  reservation: NonNullable<FindReservationById['reservation']>
}

const Reservation = ({ reservation }: Props) => {
  const [deleteReservation] = useMutation(DELETE_RESERVATION_MUTATION, {
    onCompleted: () => {
      toast.success('Reservation deleted')
      navigate(routes.reservations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteReservationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete reservation ' + id + '?')) {
      deleteReservation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Reservation {reservation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Reservation id</th>
              <td>{reservation.reservationId}</td>
            </tr>
            <tr>
              <th>Person id</th>
              <td>{reservation.personId}</td>
            </tr>
            <tr>
              <th>Room id</th>
              <td>{reservation.roomId}</td>
            </tr>
            <tr>
              <th>Checkin date</th>
              <td>{timeTag(reservation.checkinDate)}</td>
            </tr>
            <tr>
              <th>Checkout date</th>
              <td>{timeTag(reservation.checkoutDate)}</td>
            </tr>
            <tr>
              <th>Number of adults</th>
              <td>{reservation.numberOfAdults}</td>
            </tr>
            <tr>
              <th>Number of children</th>
              <td>{reservation.numberOfChildren}</td>
            </tr>
            <tr>
              <th>Total reservation days</th>
              <td>{reservation.totalReservationDays}</td>
            </tr>
            <tr>
              <th>Cost per adult</th>
              <td>{reservation.costPerAdult}</td>
            </tr>
            <tr>
              <th>Cost per child</th>
              <td>{reservation.CostPerChild}</td>
            </tr>
            <tr>
              <th>Total cost</th>
              <td>{reservation.totalCost}</td>
            </tr>
            <tr>
              <th>Created date</th>
              <td>{timeTag(reservation.createdDate)}</td>
            </tr>
            <tr>
              <th>Modified date</th>
              <td>{timeTag(reservation.modifiedDate)}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{reservation.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editReservation({ id: reservation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(reservation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Reservation
