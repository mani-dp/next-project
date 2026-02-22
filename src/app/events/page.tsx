import Contents from "@/components/Contents";
import { dataFetching } from "@/core/api/fetch";
import { Iusers } from "@/core/type/Iusers";


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