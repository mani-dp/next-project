import { getusers } from "@/core/api/users";

const usersData = async () => {
    const events = await getusers();
    return (
        <div>
            {events.map((value) => (
                <div key={value.id}>
                    <div className="flex flex-col border border-zinc-800 ">
                        <div className="flex justify-center gap-3.5 ">
                        <div>{value.name}</div>
                        <img className="w-10 h-10 ml-6" src={value.avatar} alt="avatar" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default usersData