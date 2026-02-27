import ContactUsers from "@/components/ContactUsers";
import Contents from "@/components/Contents";
import SearchForm from "@/components/SearchForm/SearchForm";
import getusers from "@/core/api/users";

interface EventSearchPArams {
    searchParams: {
        search : string,
        page : string,
    }
}

const UsersData = async ({searchParams} : EventSearchPArams) => {
  const {page, search} = await searchParams;

    const events = await getusers();
    return (
        <div>
            <SearchForm />
            <p> page : {page ? page : 'null' } </p>
            <p> search : {search ? search : 'null' }  </p>
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