"use client";
import React, { FC, useActionState } from 'react'
import SubmitButton from '../submitButton/SubmitButton'
import { IBookingMessageHandle } from '@/core/type/IBookingMessage'
import { useFormState } from 'react-dom';


interface Iprops {
    action: (
        prevState: IBookingMessageHandle,
        FormData: FormData
    ) => Promise<IBookingMessageHandle>
    eventId : string
}

const BookingForm: FC<Iprops> = ({ action,eventId }) => {
    const initialSatae : IBookingMessageHandle  = {message: ""};
    const [state,FormAction, pending]  = useActionState(action,initialSatae)
    // const [state,FormAction]  = useFormState(action,initialSatae). ////// "use FormState" =  "sue ActionState"
   console.log('state', state, pending)
   console.log("eventId sent:", eventId)
    return (
        <form action={FormAction}>
            <input type="hidden" name="userId" value={eventId} />
            <SubmitButton />
        </form>
    )
}

export default BookingForm