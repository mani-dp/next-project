"use client";
import React, { FC } from 'react'
import SubmitButton from '../submitButton/SubmitButton'
import { IBookingMessageHandle } from '@/core/type/IBookingMessage'
import { useFormState } from 'react-dom'


interface Iprops {
    action: (
        prevState: IBookingMessageHandle,
        FormData: FormData
    ) => Promise<IBookingMessageHandle>
    eventId : string
}

const BookingForm: FC<Iprops> = ({ action,eventId }) => {
    const initialSatae : IBookingMessageHandle = {message: ""};
    const [state, formAction] = useFormState(action, initialSatae)
    console.log("state", state)
    return (
        <form action={formAction}>
            <input type="hidden" name="userId" value={eventId}  />
            <SubmitButton />
        </form>
    )
}

export default BookingForm