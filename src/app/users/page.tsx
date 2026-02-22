import Contents from "@/components/Contents";
import { getusers } from "@/core/api/users";
import { url } from "inspector";
import Image from "next/image";

const UsersData = async () => {
    const events = await getusers();
    return (
        <div>

            {events.map((value) => (
                <div key={value.id}>
                    <div className="flex flex-col border border-zinc-800 ">
                        <div className="flex justify-center gap-3.5 ">
                            <div>{value.name}</div>
                            <Image
                                width={100}
                                height={100}
                                src= {value.avatar}
                                alt='without image'
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UsersData