'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

// FormEvent is deprecated ***********

const SearchForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const [query, setQuery] = useState(searchParams.get('search') || '')
    const handleSearch = (e: React.SubmitEvent) => {
        e.preventDefault()
        const params = new URLSearchParams(searchParams.toString());
        params.set("search", query);
        router.push(`?${params.toString()}`);

    }
    return (
        <form
            className="flex gap-2 mt-2"
            onSubmit={handleSearch}
        >
            <input
                className="bg-amber-50 rounded-2xl text-black "
                type="search"
                placeholder="search event....."
                value={query}
                onChange={(e) => { setQuery(e.target.value) }}

            />
            <button
                className="bg-amber-700 text-amber-100 p-1.5 rounded-2xl"
                type="submit"
            >
                Search
            </button>
        </form>
    )
}

export default SearchForm