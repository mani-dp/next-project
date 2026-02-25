import React, { FC } from 'react'
import SubmitButton from '../submitButton/SubmitButton'
import { IBookingMessageHandle } from '@/core/type/IBookingMessage'


interface Iprops {
    action: (
        prevState: IBookingMessageHandle,
        FormData: FormData
    ) => Promise<IBookingMessageHandle>
    eventId : string
}

const BookingForm: FC<Iprops> = ({ action,eventId }) => {
    return (
        <form>
            <input type="hidden" name="userId" value={eventId}  />
            <SubmitButton />
        </form>
    )
}

export default BookingForm