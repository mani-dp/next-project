import SubmitButton from "@/components/submitButton/SubmitButton"
import { Iusers } from "@/core/type/Iusers"

interface Iid {
    params: {
        id: string
    }
}
// const bookevent = async (FormData: FormData) => {
//     'use server'
//     const eventsId = FormData.get('userId')
//     const res  = await fetch(`https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers/${eventsId}`,
//         {
//             method: "PUT",
//             body: JSON.stringify({
//                 participants: [eventsId]
//             }),
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         }
//     )

//     const jsonResult = await res.json();
//     console.log('jsonResult',jsonResult)
//     return jsonResult;
// }

const bookevent = async (FormData: FormData) => {
    const evntesId = FormData.get('userId')
    const useId = '2'
    const res = await fetch(`https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers/${evntesId}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                participants: { evntesId }
            }),
            headers: {
                "Contents-Type": "appliccation/json"
            },
        }
    )

    const jsonResult = await res.json();
    console.log('jsonResult', jsonResult)
    return jsonResult

}

const HandleForm = ({ params }: Iid) => {

    return (
        <form action={bookevent}>
            <input type="hidden" name="userId" value={params.id} />
            <SubmitButton />
        </form>
    )
}

export default HandleForm