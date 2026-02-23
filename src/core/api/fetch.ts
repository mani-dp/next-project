import { Iusers } from "../type/Iusers";

export const dataFetching = async (): Promise<Iusers[]> => {
    const result = await fetch('https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers')
    if (!result.ok) {
        throw new Error("error in the fetching data")
    }
    return result.json();
}
