import axios from "axios"
import { Iusers } from "../type/Iusers"

export const getusers = async(): Promise<Iusers[]> => {
    const result = await axios.get("https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers")
    return result.data

}