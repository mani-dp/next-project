import BookingForm from "@/components/BookingForm/BookingForm"
import SubmitButton from "@/components/submitButton/SubmitButton"
import { IBookingMessageHandle } from "@/core/type/IBookingMessage"



interface Iid {
    params: {
        id: string
    }
}

const bookevent = async (
    prevState: IBookingMessageHandle,
    FormData: FormData
): Promise<IBookingMessageHandle> => {


    const eventesId = FormData.get('userId')
    const useId = '2'
    try {
        const res = await fetch(`https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers/${eventesId}`,
            {
                method: 'PUT',
                body: JSON.stringify({
                    participants: { eventesId }
                }),
                headers: {
                    "Contents-Type": "appliccation/json"
                },
            }
        )
        if (!res.ok) {
            return { message: "error in booking" }
        }
        return { message: "events booked successfully " }
    } catch (err) {
        return { message: "network error !!!" }
    }

}

const HandleForm = ({ params }: Iid) => {
    return (
        <BookingForm action={bookevent} eventId= {params.id} />
    )
}
export default HandleForm
