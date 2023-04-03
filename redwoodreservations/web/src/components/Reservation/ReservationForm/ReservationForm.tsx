import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  DatetimeLocalField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditReservationById, UpdateReservationInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormReservation = NonNullable<EditReservationById['reservation']>

interface ReservationFormProps {
  reservation?: EditReservationById['reservation']
  onSave: (data: UpdateReservationInput, id?: FormReservation['id']) => void
  error: RWGqlError
  loading: boolean
}

const ReservationForm = (props: ReservationFormProps) => {
  const onSubmit = (data: FormReservation) => {
    props.onSave(data, props?.reservation?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormReservation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="personId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Person id
        </Label>

        <NumberField
          name="personId"
          defaultValue={props.reservation?.personId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="personId" className="rw-field-error" />

        <Label
          name="roomId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Room id
        </Label>

        <NumberField
          name="roomId"
          defaultValue={props.reservation?.roomId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="roomId" className="rw-field-error" />

        <Label
          name="checkinDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checkin date
        </Label>

        <DatetimeLocalField
          name="checkinDate"
          defaultValue={formatDatetime(props.reservation?.checkinDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="checkinDate" className="rw-field-error" />

        <Label
          name="checkoutDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checkout date
        </Label>

        <DatetimeLocalField
          name="checkoutDate"
          defaultValue={formatDatetime(props.reservation?.checkoutDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="checkoutDate" className="rw-field-error" />

        <Label
          name="numberOfAdults"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number of adults
        </Label>

        <NumberField
          name="numberOfAdults"
          defaultValue={props.reservation?.numberOfAdults}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="numberOfAdults" className="rw-field-error" />

        <Label
          name="numberOfChildren"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number of children
        </Label>

        <NumberField
          name="numberOfChildren"
          defaultValue={props.reservation?.numberOfChildren}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="numberOfChildren" className="rw-field-error" />

        <Label
          name="totalReservationDays"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total reservation days
        </Label>

        <NumberField
          name="totalReservationDays"
          defaultValue={props.reservation?.totalReservationDays}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="totalReservationDays" className="rw-field-error" />

        <Label
          name="costPerAdult"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cost per adult
        </Label>

        <TextField
          name="costPerAdult"
          defaultValue={props.reservation?.costPerAdult}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="costPerAdult" className="rw-field-error" />

        <Label
          name="CostPerChild"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cost per child
        </Label>

        <TextField
          name="CostPerChild"
          defaultValue={props.reservation?.CostPerChild}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="CostPerChild" className="rw-field-error" />

        <Label
          name="totalCost"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total cost
        </Label>

        <TextField
          name="totalCost"
          defaultValue={props.reservation?.totalCost}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="totalCost" className="rw-field-error" />

        <Label
          name="createdDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created date
        </Label>

        <DatetimeLocalField
          name="createdDate"
          defaultValue={formatDatetime(props.reservation?.createdDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="createdDate" className="rw-field-error" />

        <Label
          name="modifiedDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Modified date
        </Label>

        <DatetimeLocalField
          name="modifiedDate"
          defaultValue={formatDatetime(props.reservation?.modifiedDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="modifiedDate" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <TextField
          name="status"
          defaultValue={props.reservation?.status}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="status" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ReservationForm
