import { Iusers } from "@/core/type/Iusers";

const dataFetching = async (): Promise<Iusers[]> => {
    const result = await fetch('https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers')
    if (!result.ok) {
        throw new Error("error in the fetching data")
    }
    return result.json();
}

const EventPage = async () => {
    const events = await dataFetching();
    console.log("events", events)
    return (
        <div>
            {events.map((values) => (
                <div key={values.id}>
                    <div className="flex flex-col gap-2 border ">
                    <div>{values.name}</div>
                    <img className="w-10 h-10 ml-6" src={values.avatar} alt="avatar" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EventPage