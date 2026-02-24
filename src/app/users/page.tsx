import ContactUsers from "@/components/ContactUsers";
import Contents from "@/components/Contents";
import getusers from "@/core/api/users";

const UsersData = async () => {
    const events = await getusers();
    return (
        <div>
            {events.map((value) => (
                <div key={value.id}>
                    <Contents>
                            <ContactUsers value={value} />
                    </Contents>
                </div>
            ))}
        </div>
    )
}

export default UsersData