import ReservationCell from 'src/components/Reservation/ReservationCell'

type ReservationPageProps = {
  id: number
}

const ReservationPage = ({ id }: ReservationPageProps) => {
  return <ReservationCell id={id} />
}

export default ReservationPage
