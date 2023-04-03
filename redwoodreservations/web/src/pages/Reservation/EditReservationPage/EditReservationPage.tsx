import EditReservationCell from 'src/components/Reservation/EditReservationCell'

type ReservationPageProps = {
  id: number
}

const EditReservationPage = ({ id }: ReservationPageProps) => {
  return <EditReservationCell id={id} />
}

export default EditReservationPage
