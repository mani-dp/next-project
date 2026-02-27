import BookingForm from "@/components/BookingForm/BookingForm"
import { IBookingMessageHandle } from "@/core/type/IBookingMessage"
import { createInitialRSCPayloadFromFallbackPrerender } from "next/dist/client/flight-data-helpers"
import { Cookie } from "next/font/google"

interface Iid {
    params: {
        id: string,
    }
}

export async function bookevent(
    prevState: IBookingMessageHandle,
    FormData: FormData
): Promise<IBookingMessageHandle> {
    'use server'
    const eventId = FormData.get('userId') 
    if (!eventId) {
            return { message : "invalid id"}
    }
    try {
        const res = await fetch(`https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers/${eventId}`,
            {
                method: 'PUT',
                body: JSON.stringify({ booked: true }),
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )
        if (!res.ok) {
            return { message: "error in booking" }
        }
       return {message: 'successfully!!!!!'}
    } catch (err) {
        return { message: "network error !!!" }
    }

}

export default async function HandleForm({ params }: Iid) {
    const { id } = await params;
    return (
        <BookingForm action={bookevent} eventId={id} />
    )
}

